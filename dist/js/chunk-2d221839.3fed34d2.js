(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221839"],{cb59:function(e,t){var o='<hr> <p>title: Raspberry won&#39;t boot - Recover data and fix bug with chroot [ubuntu] description: If raspberry won&#39;t boot and it&#39;s caused after you installed upstart, you can use chroot for make backup or fix the whole image permalink: raspberry-wont-boot-make-backup-with-chroot-shell icon: 53jnUK5LqEY date: 2017-06-01 category: bug tags: [raspberry, boot, backup]</p> <hr> <h1 id="raspberry-wont-boot---recover-data-and-fix-bug-with-chroot-ubuntu">Raspberry won&#39;t boot - Recover data and fix bug with chroot [ubuntu]</h1> <div class="mx-auto"> <img class="max-w-full" src="https://source.unsplash.com/53jnUK5LqEY/960x680"/> </div> <p>Two weeks ago I installed on my raspberry (raspbian wheezy) upstart package (an ubuntu package for process management)... and it was an error.</p> <p>Yeah, because raspbian has systemd and you don&#39;t need to install upstart!! Don&#39;t do that! It&#39;s a little bit strange that, after installed the package, raspberry was still going.</p> <p>For an unlucky event at my house the current was gone. So, the raspberry was (suddendly) powered off. Then it won&#39;t boot anymore.</p> <p>The error show up at the boot screen was related to &quot;semlinux&quot; and it can&#39;t mount the partition. {% highlight bash %} Mount failed for selinuxfs on /sys/fs/selinux: No such file or directory {% endhighlight %}</p> <h2 id="how-you-can-resolve-this">How you can resolve this?</h2> <p>There were 3 choice:</p> <ul> <li>Backup or copy the whole root partition to a new sd card</li> <li>edit cmdline.txt adding init=/bin/bash (called single-user mode or recovery mode)</li> <li>fix the issue via chroot</li> </ul> <h3 id="backup">Backup</h3> <p>Yeah, I know.. we usually have a backup (don&#39;t you?)... but it was not my case! :(</p> <h3 id="single-user-mode">Single-user mode</h3> <p>So I tried to add init=/bin/bash to cmdline.txt file present in the boot partition.</p> <p>At the startup the boot stop and, after you hit enter, you can access to the root shell.</p> <p>Here you can mount all the partitions and use, almost, every command.</p> <p><code>mount -rw -o remount /</code></p> <p>After this command you can edit file and add/remove package via apt.</p> <p>Before you exit the shell, you need to <code>sync</code> all the disk.</p> <p>But, if you are an unlucky person (like me), this mode doesn&#39;t work for your issue.</p> <p>I need to remove upstart package, but in this shell I did not have a network (even via ethernet).</p> <p>So, before hard reset or copy the whole root partition to a new sd image, I decided to try with chroot command.</p> <h3 id="wtf-is-chroot">WTF is chroot?</h3> <p>It&#39;s a command that can perform a change of root directory and you can exec some command (for example a /bin/bash). So, it&#39;s like you were connect directly to raspberry via SSH.</p> <h2 id="but">BUT!</h2> <p>To this you need to have a VM or a PC with ubuntu (or other linux distro) and <code>qemu-arm</code> installed.</p> <p>qemu is a package that can simulate the raspberry&#39;s architecture (arm64).</p> <p>After installed qemu, you can mount from an img or from the sd card all the partitions.</p> <p><strong>NOTE</strong>: for creating the loopback device I usually use kpartx</p> <p>If you are using a img file: For example (this command will create, for each partition, a device called /dev/mapper/loop0pN): <code>$ sudo kpartx -a -v 2015-02-16-raspbian-wheezy.img</code></p> <p>You need to mount the root and the boot partition, together, like this:</p> <p>{% highlight bash %} $ sudo mount /dev/mapper/loop0p1 /mnt $ sudo mount /dev/mapper/loop0p1 /mnt/boot {% endhighlight %}</p> <p>Now you have your raspberry mounted. You need to connect to it! We are gonna do this using chroot command.</p> <p>Before using chroot, we need to copy our /usr/bin/qemu-arm to the mounted raspberry partition, because chroot need that for start the shell. So copy from /usr/bin/qemu-arm to /mnt/usr/bin/qemu-arm</p> <p>After that you can run: <code>sudo chroot /mnt /usr/bin/qemu-arm</code></p> <p>It will open a new root shell and that&#39;s it! Remember to sync after all the edits.</p> <p>NOTE: remember, I&#39;m the unluckiest man in the world, and after chroot I couldn&#39;t connect to internet (if config did not working, even network config or dhcp or ethernet). So I need to mount even the proc/ directory of my ubuntu installtion to the new mounted partition of raspberry (/mnt/proc) and re-init the chroot.</p> <p>After that, I launched ifconfig and dhcpclient config and it started to working.</p> <p>It&#39;s a little bit complex here, but I hope to be of help to you!</p> ';e.exports=o}}]);
//# sourceMappingURL=chunk-2d221839.3fed34d2.js.map