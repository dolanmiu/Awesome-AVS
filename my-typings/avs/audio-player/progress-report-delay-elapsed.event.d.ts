// https://developer.amazon.com/docs/alexa-voice-service/audioplayer.html#progressreportdelayelapsed
declare namespace AVS {
    namespace AudioPlayer {
        interface ProgressReportDelayElapsedEvent {
            token: string;
            offsetInMilliseconds: number;
        }
    }
}
