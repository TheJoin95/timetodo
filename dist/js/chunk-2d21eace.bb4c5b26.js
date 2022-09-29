(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eace"],{d727:function(a,t){var o='<hr> <p>title: Ionic - Build ios app without a mac... VM! description: If you don&#39;t have a macbook or a mac you can build your ionic app with virtual machine! permalink: ionic-build-ios-app-without-mac-virtual-machine icon: tdMu8W9NTnY date: 2017-12-09 category: ionic tags: [ionic, ios, build]</p> <hr> <h1 id="ionic---build-ios-app-without-a-mac-vm">Ionic - Build ios app without a mac... VM!</h1> <div class="mx-auto"> <img class="max-w-full" src="https://source.unsplash.com/tdMu8W9NTnY/960x680"/> </div> <p>Yep... same problem here! But I&#39;ve got a solution! If you don&#39;t have a mac to build your app, and if you don&#39;t want to buy it... you can follow these guide. I will use Virtual Machine and vagrant.</p> <h2 id="what-we-need">What we need?</h2> <ul> <li><a href="https://www.vagrantup.com/">Vagrant</a></li> <li><a href="https://www.virtualbox.org/wiki/Downloads">VirtualBox</a></li> <li><a href="https://www.virtualbox.org/wiki/Downloads">VirtualBox Extentions Pack</a></li> </ul> <p>After you have install it, we can search on vagrant for a good image of mac os. In this guide, I will use a Mac Os Sierra image, because I need at least XCode 9.</p> <p><strong>NOTE: you can search whatever you want on vagrant, just make sure the image is updated.</strong></p> <h2 id="install-mac-os-by-vagrant">Install Mac Os by vagrant</h2> <p>We will use this vagrant image: <a href="https://app.vagrantup.com/jhcook/boxes/macos-sierra">jhcook/macos-sierra</a>.</p> <p>All you need to do is to make a dir and then type:</p> <p>{% highlight bash %} vagrant init jhcook/macos-sierra; vagrant up {% endhighlight %}</p> <p>This will initialize a vagrant instance in Virtual Box and the it will try to run it.</p> <p><strong>NOTE: Mac Os Sierra is 13GB. Take a break or a night out.</strong></p> <h2 id="after-the-installation">After the installation</h2> <p>So, now you have a vagrant instance running. You can connect to the system trough a vagrant ssh (127.0.0.1) or... just open the VM on VirtualBox.</p> <p>The username and the password are the default for vagrant: </p> <ul> <li>user: vagrant</li> <li>psw: vagrant</li> </ul> <p>After the installation you need to install what you need, for example, XCode or GIT or Ionic. Yeah, it is a low budget solution, but it works.</p> <p>You can build your app and submit it to the Apple Store. Make sure (ALWAYS) to save your virtual machine state, otherwise you need to redo what you already do before.</p> <p>Cheers.</p> <p>P.S. Apple approve the virtualization of their O.S.</p> ';a.exports=o}}]);
//# sourceMappingURL=chunk-2d21eace.bb4c5b26.js.map