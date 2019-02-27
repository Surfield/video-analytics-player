function eventStream(eventName, eventTime) {
    console.log(eventName + ' event fired at' + parseInt(eventTime))
    return {
        type: eventName,
        time: eventTime
    }
}