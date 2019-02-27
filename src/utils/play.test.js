import eventStream from '../utils/play'

test('Play event type', () => {
    expect(eventStream("playing,0")).toEqual({ "eventName": "playing", "eventTime": "0" })
});

test('Pause event type', () => {
    expect(eventStream("pause,70")).toEqual({ "eventName": "pause", "eventTime": "70" })
});

test('End event type', () => {
    expect(eventStream("end,300")).toEqual({ "eventName": "end", "eventTime": "300" })
});

