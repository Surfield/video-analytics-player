var pjson = require('../../package.json');

export function captureEvent(eventName, eventTime){
    console.log(eventName +' event fired at ' + parseInt(eventTime))
    return {
        type: eventName,
        time: eventTime
    }
}


export function eventDataFormatter(eventName, eventTime, meta={}){
    let data = {
        videoAnalyticsPlayer: {
            event: captureEvent(eventName, eventTime),
            version: pjson.version
        },
    }
    if (Object.keys(meta).length !== 0){
        data.meta = meta
    }

    return data
}

export function sendVideoEventData(eventName, eventTime, meta){
    let payload = eventDataFormatter(eventName, eventTime, meta)
    
    createVideoEvent(payload)
}

function createVideoEvent(payload){
    var event = new CustomEvent('videoAnalyticsPlayerEvent', { detail: payload });
    dispatchEvent(event);
}
