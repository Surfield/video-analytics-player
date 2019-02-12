import Vue from 'vue'
import App from './App.vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

function getVideoType(videoPath)
{
    var link = videoPath.toLowerCase();
    var path;

    if(link.match(/youtube/) != null)
     path = link.match(/youtube/);

    elseif(link.match(/vimeo/) != null)
     path = link.match(/vimeo/);

    elseif(link.match(/mp4/) != null)
     path =  link.match(/mp4/)

    return path;
}