//
//  DGAudioController.m
//  AudioOC
//
//  Created by mao zuo on 2018/6/14.
//  Copyright © 2018年 maozuo. All rights reserved.
//

#import "DGAudioController.h"
#import "DGAudio.h"
#import "NSString+URL.h"
#import "NSString+Additions.h"

#import "MusicSlider.h"
#import <Masonry.h>
#import <UIImageView+WebCache.h>
#import <MediaPlayer/MediaPlayer.h>

static void *kStatusKVOKey = &kStatusKVOKey;
static void *kDurationKVOKey = &kDurationKVOKey;
static void *kBufferingRatioKVOKey = &kBufferingRatioKVOKey;

@interface DGAudioController ()

//控件
@property (nonatomic, strong) MusicSlider *musicSlider;
@property (nonatomic, strong) UIButton *musicToggleButton;
@property (nonatomic, strong) UILabel *beginTimeLabel;
@property (nonatomic, strong) UILabel *endTimeLabel;

@property (nonatomic) NSTimer *musicDurationTimer;
@property (nonatomic) BOOL musicIsPlaying;

@end

@implementation DGAudioController

+ (instancetype)sharedInstance {
  static DGAudioController * sharedMusicVC = nil;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    sharedMusicVC = [[DGAudioController alloc]init];
    sharedMusicVC.streamer = [[DOUAudioStreamer alloc] init];
  });
  return sharedMusicVC;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.musicDurationTimer = [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(updateSliderValue) userInfo:nil repeats:YES];
    [self setupUI];
    [self createStreamer];
    [self startRemoteControlEvent];
}

#pragma mark - Private

-(void)setupUI{
    UIView * topView = [[UIView alloc]init];
    topView.backgroundColor = [UIColor whiteColor];
    [self.view addSubview:topView];
    [topView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.equalTo(self.view);
        make.height.equalTo(self.view).offset(-200);
        make.width.equalTo(self.view);
    }];
    UIView * bottomWraperView = [[UIView alloc]init];
    bottomWraperView.backgroundColor = [UIColor whiteColor];
    [self.view addSubview:bottomWraperView];
    [bottomWraperView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.equalTo(self.view);
        make.height.mas_equalTo(200);
        make.width.equalTo(self.view);
    }];
    //背景图
    UIImageView * backgroundView = [[UIImageView alloc]init];
    NSURL * imageUrl = [NSURL URLWithString:@"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=0cdca9eeb4096b63951456026d5aec21/64380cd7912397dda7def6c55382b2b7d1a2874f.jpg"];
    [backgroundView sd_setImageWithURL:imageUrl placeholderImage:[UIImage imageNamed:@"music_placeholder"]];
    [topView addSubview:backgroundView];
    [backgroundView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.edges.equalTo(topView);
    }];
    //毛玻璃
    UIBlurEffect *effect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleDark];
    UIVisualEffectView *effectView = [[UIVisualEffectView alloc] initWithEffect:effect];
    [backgroundView addSubview:effectView];
    [effectView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.edges.equalTo(backgroundView);
    }];
    //主图片
    UIImageView * mainImageView = [[UIImageView alloc]init];
    mainImageView.layer.cornerRadius = 4;
    mainImageView.layer.masksToBounds = YES;
    [mainImageView sd_setImageWithURL:imageUrl placeholderImage:[UIImage imageNamed:@"music_placeholder"]];
    [topView addSubview:mainImageView];
    [mainImageView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(topView).offset(80);
        make.centerX.equalTo(topView.mas_centerX);
        make.width.mas_equalTo(130);
        make.height.mas_equalTo(170);
    }];
    //主标题
    UILabel * title = [[UILabel alloc]init];
    title.textAlignment = NSTextAlignmentCenter;
    title.text = @"梓源妹妹好美呀呀呀";
    title.textColor = [UIColor whiteColor];
    title.numberOfLines = 2;
    [title setFont:[UIFont systemFontOfSize:18]];
    [topView addSubview:title];
    [title mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(mainImageView.mas_bottom).offset(20);
        make.centerX.equalTo(mainImageView.mas_centerX);
        make.width.equalTo(topView).multipliedBy(0.8);
    }];
    //副标题
    UIScrollView * contentScrollView = [[UIScrollView alloc]init];
    [topView addSubview:contentScrollView];
    [contentScrollView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(title.mas_bottom).offset(30);
        make.bottom.equalTo(topView.mas_bottom).offset(-10);
        make.width.equalTo(topView).multipliedBy(0.7);
        make.centerX.equalTo(title.mas_centerX);
    }];
    UILabel * contentLabel = [[UILabel alloc]init];
    contentLabel.textAlignment = NSTextAlignmentCenter;
    contentLabel.text = @"妹妹好美呀";
    contentLabel.numberOfLines=0;
    contentLabel.textColor = [UIColor whiteColor];
    [contentLabel setFont:[UIFont systemFontOfSize:14]];
    [contentScrollView addSubview:contentLabel];
    [contentLabel mas_makeConstraints:^(MASConstraintMaker *make) {
        make.edges.equalTo(contentScrollView);
        make.width.equalTo(contentScrollView);
    }];
    //开始 结束 时间标签
    self.beginTimeLabel = [[UILabel alloc]init];
    self.endTimeLabel = [[UILabel alloc]init];
    self.beginTimeLabel.textColor = [UIColor colorWithRed:153/255.0 green:153/255.0 blue:153/255.0 alpha:1];
    self.endTimeLabel.textColor = [UIColor colorWithRed:153/255.0 green:153/255.0 blue:153/255.0 alpha:1];
    [self.beginTimeLabel setFont:[UIFont systemFontOfSize:10]];
    [self.endTimeLabel setFont:[UIFont systemFontOfSize:10]];
    self.beginTimeLabel.text = @"00:00";
    self.endTimeLabel.text = @"00:00";
    [bottomWraperView addSubview:self.beginTimeLabel];
    [bottomWraperView addSubview:self.endTimeLabel];
    [self.beginTimeLabel mas_makeConstraints:^(MASConstraintMaker *make) {
        make.width.mas_equalTo(35);
        make.left.equalTo(bottomWraperView).offset(10);
        make.top.equalTo(bottomWraperView).offset(20);
    }];
    [self.endTimeLabel mas_makeConstraints:^(MASConstraintMaker *make) {
        make.width.mas_equalTo(35);
        make.top.equalTo(bottomWraperView).offset(20);
        make.right.equalTo(bottomWraperView).offset(-10);
    }];
    //滑动条
    self.musicSlider = [MusicSlider new];
    [self.musicSlider addTarget:self action:@selector(didChangeMusicSliderValue) forControlEvents:UIControlEventValueChanged];
    [bottomWraperView addSubview:self.musicSlider];
    [self.musicSlider mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.equalTo(self.beginTimeLabel.mas_right).offset(15);
        make.centerY.equalTo(self.beginTimeLabel);
        make.right.equalTo(self.endTimeLabel.mas_left).offset(-10);
    }];
    //开始 停止 按钮
    self.musicToggleButton = [UIButton new];
    [self.musicToggleButton setImage:[UIImage imageNamed:@"audio_player_play_btn"] forState:UIControlStateNormal];
    [self.musicToggleButton addTarget:self action:@selector(didTouchMusicToggleButton) forControlEvents:UIControlEventTouchUpInside];
    [bottomWraperView addSubview:self.musicToggleButton];
    [self.musicToggleButton mas_makeConstraints:^(MASConstraintMaker *make) {
        make.width.height.mas_equalTo(66);
        make.top.equalTo(self.musicSlider.mas_bottom).offset(15);
        make.centerX.equalTo(bottomWraperView);
    }];
    //前进，倒退按钮
    UIButton * backButton = [[UIButton alloc]init];
    [backButton setImage:[UIImage imageNamed:@"audio_player_back_btn"] forState:UIControlStateNormal];
    [backButton addTarget:self action:@selector(backAudio) forControlEvents:UIControlEventTouchUpInside];
    [bottomWraperView addSubview:backButton];
    [backButton mas_makeConstraints:^(MASConstraintMaker *make) {
        make.width.height.mas_equalTo(40);
        make.centerY.equalTo(self.musicToggleButton.mas_centerY);
        make.right.equalTo(self.musicToggleButton.mas_left).offset(-40);
    }];
    UIButton * forwardButton = [[UIButton alloc]init];
    [forwardButton setImage:[UIImage imageNamed:@"audio_player_forward_btn"] forState:UIControlStateNormal];
    [forwardButton addTarget:self action:@selector(forwardAudio) forControlEvents:UIControlEventTouchUpInside];
    [bottomWraperView addSubview:forwardButton];
    [forwardButton mas_makeConstraints:^(MASConstraintMaker *make) {
        make.width.height.mas_equalTo(40);
        make.centerY.equalTo(self.musicToggleButton.mas_centerY);
        make.left.equalTo(self.musicToggleButton.mas_right).offset(40);
    }];
    //底下按钮
    UIView * blankView = [[UIView alloc]init];
    blankView.backgroundColor = [UIColor colorWithWhite:0 alpha:0.1];
    [bottomWraperView addSubview:blankView];
    [blankView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.equalTo(bottomWraperView.mas_bottom).offset(-60);
        make.width.equalTo(bottomWraperView);
        make.height.mas_equalTo(1);
    }];
    UIView * leftView = [[UIView alloc]init];
    UIView * rightView = [[UIView alloc]init];
    [bottomWraperView addSubview:leftView];
    [bottomWraperView addSubview:rightView];
    [leftView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.bottom.equalTo(bottomWraperView);
        make.top.equalTo(blankView);
        make.width.equalTo(bottomWraperView).multipliedBy(0.5);
    }];
    [rightView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.right.bottom.equalTo(bottomWraperView);
        make.top.equalTo(blankView);
        make.width.equalTo(bottomWraperView).multipliedBy(0.5);
    }];
    //文档按钮
    UIImageView * docImage = [[UIImageView alloc]initWithImage:[UIImage imageNamed:@"document_icon"]];
    UILabel * docText = [[UILabel alloc]init];
    docText.text = @"文档";
    docText.textColor = [UIColor colorWithWhite:153/255.0 alpha:1];
    [docText setFont:[UIFont systemFontOfSize:12]];
    [leftView addSubview:docText];
    [leftView addSubview:docImage];
    [docImage mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(leftView).offset(10);
        make.centerX.equalTo(leftView.mas_centerX);
    }];
    [docText mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(docImage.mas_bottom).offset(5);
        make.centerX.equalTo(docImage.mas_centerX);
    }];
    UIButton * docBtn = [[UIButton alloc]init];
    [docBtn setBackgroundColor:[UIColor colorWithWhite:1 alpha:0]];
    [leftView addSubview:docBtn];
    [docBtn mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(leftView);
        make.width.mas_equalTo(50);
        make.centerX.equalTo(docImage.mas_centerX);
        make.bottom.equalTo(docText.mas_bottom);
    }];
    [docBtn addTarget:self action:@selector(docClick) forControlEvents:UIControlEventTouchUpInside];
    //分享按钮
    UIImageView * shareImage = [[UIImageView alloc]initWithImage:[UIImage imageNamed:@"share_icon"]];
    UILabel * shareText = [[UILabel alloc]init];
    shareText.text = @"分享";
    shareText.textColor = [UIColor colorWithWhite:153/255.0 alpha:1];
    [shareText setFont:[UIFont systemFontOfSize:12]];
    [rightView addSubview:shareText];
    [rightView addSubview:shareImage];
    [shareImage mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(rightView).offset(10);
        make.centerX.equalTo(rightView.mas_centerX);
    }];
    [shareText mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(shareImage.mas_bottom).offset(5);
        make.centerX.equalTo(shareImage.mas_centerX);
    }];
    UIButton * shareBtn = [[UIButton alloc]init];
    [shareBtn setBackgroundColor:[UIColor colorWithWhite:1 alpha:0]];
    [rightView addSubview:shareBtn];
    [shareBtn mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(rightView);
        make.width.mas_equalTo(50);
        make.centerX.equalTo(shareImage.mas_centerX);
        make.bottom.equalTo(shareText.mas_bottom);
    }];
    [shareBtn addTarget:self action:@selector(shareClick) forControlEvents:UIControlEventTouchUpInside];
    
}

-(void)docClick{
    NSLog(@"点了下文档");
}

-(void)shareClick{
    NSLog(@"点了下分享");
}

# pragma mark - Audio Handle

-(void)createStreamer{
    //NSString * urlStr =@" ";
    //NSString * urlStr =@"https://audio-cdn.dealglobe.com/uploads/audio_file/file/42/1528108744_编辑版.mp3";
    NSString * urlStr =@"https://audio-pre.dealglobe.com/uploads/audio_file/file/139/1528449737_%E5%B0%91%E5%A5%B3%E6%97%B6%E4%BB%A3_-_DIVINE.mp3";
    urlStr = [urlStr URLEncodedString];
    NSURL *url = [[NSURL alloc] initWithString: urlStr];
    
    //NSURL * url = [NSURL URLWithString:urlStr];
    
    DGAudio * audio = [DGAudio new];
    audio.audioFileURL = url;
    
    @try {
        [self removeStreamerObserver];
    } @catch(id anException){
    }
    _streamer = nil;
    _streamer = [DOUAudioStreamer streamerWithAudioFile:audio];
    
    [self addStreamerObserver];
    [_streamer play];
}

- (void)addStreamerObserver {
    [_streamer addObserver:self forKeyPath:@"status" options:NSKeyValueObservingOptionNew context:kStatusKVOKey];
    [_streamer addObserver:self forKeyPath:@"duration" options:NSKeyValueObservingOptionNew context:kDurationKVOKey];
    [_streamer addObserver:self forKeyPath:@"bufferingRatio" options:NSKeyValueObservingOptionNew context:kBufferingRatioKVOKey];
}

- (void)removeStreamerObserver {
    [_streamer removeObserver:self forKeyPath:@"status"];
    [_streamer removeObserver:self forKeyPath:@"duration"];
    [_streamer removeObserver:self forKeyPath:@"bufferingRatio"];
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary *)change context:(void *)context {
    if (context == kStatusKVOKey) {
        [self performSelector:@selector(updateStatus)
                     onThread:[NSThread mainThread]
                   withObject:nil
                waitUntilDone:NO];
    } else if (context == kDurationKVOKey) {
        [self performSelector:@selector(updateSliderValue)
                     onThread:[NSThread mainThread]
                   withObject:nil
                waitUntilDone:NO];
    } else if (context == kBufferingRatioKVOKey) {
        [self performSelector:@selector(updateBufferingStatus)
                     onThread:[NSThread mainThread]
                   withObject:nil
                waitUntilDone:NO];
    } else {
        [super observeValueForKeyPath:keyPath ofObject:object change:change context:context];
    }
}

- (void)updateStatus {
    self.musicIsPlaying = NO;
    
    switch ([_streamer status]) {
        case DOUAudioStreamerPlaying:
            NSLog(@"播放了");
            self.musicIsPlaying = YES;
            break;
            
        case DOUAudioStreamerPaused:
            break;
            
        case DOUAudioStreamerIdle:
            break;
            
        case DOUAudioStreamerFinished:
            break;
            
        case DOUAudioStreamerBuffering:
            NSLog(@"正在缓冲");
            break;
            
        case DOUAudioStreamerError:
            break;
    }
}

# pragma mark - Music Controls
- (void)didTouchMusicToggleButton {
    if (_musicIsPlaying) {
        [_streamer pause];
    } else {
        [_streamer play];
    }
}

- (void)didChangeMusicSliderValue {
    if (_streamer.status == DOUAudioStreamerFinished) {
        _streamer = nil;
        [self createStreamer];
    }
    [_streamer setCurrentTime:[_streamer duration] * _musicSlider.value];
    [self updateProgressLabelValue];
}

- (void)backAudio{
    double destinationTime = 0;
    if(_streamer.currentTime > 15){
        destinationTime = [_streamer currentTime] - 15;
    }
    [_streamer setCurrentTime:destinationTime];
}

- (void)forwardAudio{
    double destinationTime = [_streamer duration];
    if(_streamer.currentTime +15 < [_streamer duration]){
        destinationTime = [_streamer currentTime] + 15;
    }
    [_streamer setCurrentTime:destinationTime];
}

- (void)updateSliderValue {
    if (!_streamer) {
        return;
    }
    if (_streamer.status == DOUAudioStreamerFinished) {
        [_streamer play];
    }
    
    if ([_streamer duration] == 0.0) {
        [_musicSlider setValue:0.0f animated:NO];
    } else {
        if (_streamer.currentTime >= _streamer.duration) {
            _streamer.currentTime -= _streamer.duration;
        }
        [_musicSlider setValue:[_streamer currentTime] / [_streamer duration] animated:YES];
        [self updateProgressLabelValue];
    }
    [self updateLockScreen];
}

- (void)updateProgressLabelValue {
    _beginTimeLabel.text = [NSString timeIntervalToMMSSFormat:_streamer.currentTime];
    _endTimeLabel.text = [NSString timeIntervalToMMSSFormat:_streamer.duration];
}

- (void)updateBufferingStatus {
    
}

- (void)invalidMusicDurationTimer {
    if ([_musicDurationTimer isValid]) {
        [_musicDurationTimer invalidate];
    }
    _musicDurationTimer = nil;
}

- (void)setMusicIsPlaying:(BOOL)musicIsPlaying {
    _musicIsPlaying = musicIsPlaying;
    if (_musicIsPlaying) {
        [_musicToggleButton setImage:[UIImage imageNamed:@"audio_player_pause_btn"] forState:UIControlStateNormal];
    } else {
        [_musicToggleButton setImage:[UIImage imageNamed:@"audio_player_play_btn"] forState:UIControlStateNormal];
    }
}

#pragma mark - Lock Screen Play
//锁屏 播放
-(void)startRemoteControlEvent{
    MPRemoteCommandCenter * center = [MPRemoteCommandCenter sharedCommandCenter];
    [center.playCommand addTarget:self action:@selector(didTouchMusicToggleButton)];
    [center.pauseCommand addTarget:self action:@selector(didTouchMusicToggleButton)];
    [center.nextTrackCommand addTarget:self action:@selector(forwardAudio)];
    [center.previousTrackCommand addTarget:self action:@selector(backAudio)];
}

- (void)updateLockScreen{
    MPNowPlayingInfoCenter * center = [MPNowPlayingInfoCenter defaultCenter];
    NSURL *url = [NSURL URLWithString: @"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=144984235,370258528&fm=27&gp=0.jpg"];
    UIImage *image = [UIImage imageWithData: [NSData dataWithContentsOfURL:url]];
    MPMediaItemArtwork *artwork = [[MPMediaItemArtwork alloc] initWithImage:image];
    center.nowPlayingInfo = @{
                              MPMediaItemPropertyAlbumTitle:@"易界音频",
                              MPMediaItemPropertyArtist:@"易界网",
                              MPMediaItemPropertyPlaybackDuration:@(_streamer.duration),
                              MPMediaItemPropertyTitle:@"梓源妹妹",
                              MPNowPlayingInfoPropertyElapsedPlaybackTime:@(_streamer.currentTime),
                              MPMediaItemPropertyArtwork:artwork,
                              };
}

- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}

@end
