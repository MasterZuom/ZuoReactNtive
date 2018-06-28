//
//  DGAudio.h
//  AudioOC
//
//  Created by mao zuo on 2018/6/14.
//  Copyright © 2018年 maozuo. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DOUAudioFile.h"

@interface DGAudio : NSObject <DOUAudioFile>

//音乐路径
@property (nonatomic, strong) NSURL *audioFileURL;
@property (nonatomic, strong) NSURL *tempFileURL;
@property (nonatomic, strong) NSURL *cacheFileURL;

@end
