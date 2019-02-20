export default function getVideoType(videoPath)
{
    var link = videoPath;
    var path = {type: null, id: null};
    var startIndex;

    if (link === undefined){
        return path;
    }

    link.trim()
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

    else if(link.match(/mp4/) != null)
     {
         path.type =  link.match(/mp4/)[0];
         path.id = link;
     }
     
    return path;
}
