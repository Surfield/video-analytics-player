const getVideoType = require('./videolink');

test('Youtube video type',() => {
    expect(getVideoType("https://www.youtube.com/watch?v=7r4xVDI2vho")).toEqual({"id": "7r4xVDI2vho", "type": "youtube"})
});

test('Vimeo video type',() => {
    expect(getVideoType("https://vimeo.com/49384334")).toEqual({"id" : "49384334", "type": "vimeo"})
});

test('Detects mp4 video type',() => {
    expect(getVideoType("http://surf.com/a123h456.mp4")).toEqual({"id" : "http://surf.com/a123h456.mp4", "type" : "mp4"});
});

test('No pre-defined video type',() => {
    expect(getVideoType("https://dfhcbdhc//sd.com")).toEqual({"id": "null", "type": "null"})
});
