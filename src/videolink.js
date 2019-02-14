function getVideoType(videoPath)
{
    var link = videoPath;
    var path = {type: "null", id: "null"};
    var startIndex;

    //var typeMp4 = link.match(/mp4/);

    if(link.match(/youtube/) != null)
    {
     path.type = link.match(/youtube/)[0];
     startIndex = link.search("v=");
     if(startIndex != null)
        path.id = link.slice(startIndex + 2);
    }

    else if(link.match(/vimeo/) != null)
     {
         path.type = link.match(/vimeo/)[0];
         startIndex = link.search("com/");
         if(startIndex != null)
            path.id = link.slice(startIndex + 4);
     }

    // else if(link.match(/mp4/) != null)
    //  {
    //      path.type =  link.match(/mp4/)[0];
    //  }


    
    return path;
}

module.exports = getVideoType;