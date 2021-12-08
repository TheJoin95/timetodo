(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230282"],{eaa1:function(t,e){var o='<hr> <p>title: How to make a 8D audio track with Python description: Learn how to make a mono/stereo audio track to 8D Ambisonic audio track with python language permalink: how-make-8d-ambisonic-audio-track-python icon: -enX3Ef2BjI date: 2018-10-28 category: python tags: [python]</p> <hr> <h1 id="how-to-make-a-8d-audio-track-with-python">How to make a 8D audio track with Python</h1> <div class="mx-auto"> <img class="max-w-full" src="https://source.unsplash.com/-enX3Ef2BjI/960x680"/> </div> <p>Did you ever listen to an 8D song? Or Ambisonic audio track? I&#39;ll suggest you to take your headphone, 5min of your time, and search &quot;8d song&quot; on youtube. Enjoy.</p> <p>It&#39;s sound amazing.</p> <p>So... I wanted to figure out if it was possibile to recreate the 8D effects with any audio sources. The response: yes.</p> <p>For this little project I choose Python with the PyDub library. I made a simple script right here: <a href="https://github.com/TheJoin95/ambisonics-3d-audio">https://github.com/TheJoin95/ambisonics-3d-audio</a> Check it out, clone it and try it.</p> <h2 id="how-it-works">How it works?</h2> <p>An Ambisonic track is totally a different track from a mp3 file or a video. It need to be recored by a special microphone, with at least 4channels. To reproduce the Ambisonic track you need to have multiple speaker (like a 5.1 and more).</p> <p>My goal is to make every single audio track an ambisonic track or, at least, make a 360/3D effects audio. We can recreate the 3D effects by using some effects (pass filter low|high) and panning the audio from the left earphone to the right side and viceversa.</p> <p>Of course, you can try to mix the audio track by invert the phase and overlap the track. This can guarantee you a good quality result.</p> <p>I&#39;ll suggest you to try the script on github with your favorite track.</p> <h2 id="editing-the-script">Editing the script</h2> <p>You can edit the init.py file with your mp3 file to convert, e.g.</p> <p>{% highlight python %} interval = 0.2 * 1000 # sec song = AudioSegment.from_mp3(&#39;mp3/castle-of-glass.mp3&#39;) {% endhighlight %}</p> <p>then you can run the init.py script. The result (a mp3 file) will be produced in a compiled folder.</p> <p>Enjoy your 8D track.</p> ';t.exports=o}}]);
//# sourceMappingURL=chunk-2d230282.de43d66e.js.map