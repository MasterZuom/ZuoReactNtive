//
//  DGAudioController.h
//  AudioOC
//
//  Created by mao zuo on 2018/6/14.
//  Copyright © 2018年 maozuo. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <DOUAudioStreamer.h>

@interface DGAudioController : UIViewController

@property (nonatomic, strong) DOUAudioStreamer *streamer;

-(void)createStreamer;
+ (instancetype)sharedInstance;


@end
