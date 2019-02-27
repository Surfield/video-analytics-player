import captureEvent from '../utils/seekEvent.js'

test('Capture seeking time',() => {
    expect(captureEvent("seeking", 20)).toEqual({"type": "seeking", "time": 20})
});

test('Capture seeked time',() => {
    expect(captureEvent("seeked", 40)).toEqual({"type": "seeked", "time": 40})
});