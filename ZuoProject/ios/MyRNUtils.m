//
//  MyRNUtils.m
//  ZuoProject
//
//  Created by mao zuo on 2018/6/28.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MyRNUtils.h"
#import "DGAudioController.h"

@implementation MyRNUtils

@synthesize bridge = _bridge;
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showAudioVC){
  dispatch_async(dispatch_get_main_queue(), ^{
      DGAudioController * audioVC = [DGAudioController sharedInstance];
      [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:audioVC animated:YES completion:nil];
  });
}

@end
