import { captureEvent, eventDataFormatter } from './captureEvent'
var pjson = require('../../package.json');

test('Play event type', () => {
    expect(captureEvent("playing", 0)).toEqual({ type: "playing", time: 0 })
});

test('Pause event type', () => {
    expect(captureEvent("pause", 70)).toEqual({ type: "pause", time: 70 })
});

test('End event type', () => {
    expect(captureEvent("end", 300)).toEqual({ type: "end", time: 300 })
});

test('Capture seeking time',() => {
    expect(captureEvent("seeking", 20)).toEqual({ type: "seeking", time: 20})
});

test('Capture seeked time',() => {
    expect(captureEvent("seeked", 40)).toEqual({type: "seeked", time: 40})
});

test('Event Data Formatter without meta',() => {
    expect(eventDataFormatter("seeked", 40)).toEqual({
        videoAnalyticsPlayer: {
            event: {
                type: "seeked", 
                time: 40
            },
            version: pjson.version
        }
    })
});

test('Event Data Formatter with meta',() => {
    expect(eventDataFormatter("seeked", 40, {id: 40})).toEqual({
        videoAnalyticsPlayer: {
            event: {
                type: "seeked", 
                time: 40
            },
            version: pjson.version
        },
        meta: {
            id: 40
        }
    })
});

