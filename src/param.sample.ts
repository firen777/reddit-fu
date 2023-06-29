export const params = {
  /**
   * pool of random comment to drawn from
   */
  overwriteStr: [
    `https://i.redd.it/e6l2hf0avg5b1.jpg`, 
    //#region 
    `# Few words on lemmy

src: https://old.reddit.com/r/apolloapp/comments/14kf7w4/i_feel_like_im_being_robbed_losing_apollo_so_long/jpsnqjw/

dessalines AKA parentis_shotgun on reddit was banned by the r/socialism mod team for posting fascist LaRouchite propaganda and then praising the reactionary author, who is also a climate change denier who writes conspiracy theory books about the "NWO".

He demanded to be unbanned but then made things even worse in their modmail by saying “putting Uyghurs in concentration camps aint cultural genocide because they're extremists”, among other awful things.

He refused to apologize for using fascist literature to condemn Uyghurs, and instead kept defending it, so they aint unbanning him.

Here's the kind of thing the LaRouchite he's defending writes:

>	Soros is one of the what in medieval days were called Hoffjuden, the "Court Jews," who were deployed by the aristocratic families. The most important of such "Jews who are not Jews." are the Rothchilds, who launched Soros's career. They are the members of the Club of the Isles and retainers of the British royal family. This has been true since Amschel Rothschild sold the British Hessian troops to fight against George Washington during the American Revolution. Soros is American only in his passport."

People have been trying to warn the users of his site, but he keeps censoring and banning anyone that talks about it. Yesterday it showed up on the mod log, but now he uses some kind of trickery so you get banned and censored without anyone knowing.
Anyway, someone said to post it here so he can't censor it. We'll see what happenes. I'm not really optimistic since tankies seem to have their hands in every pie lately.  [see here](https://raddle.me/f/lobby/96713/heads-up-the-tankie-behind-lemmy-ml-got-banned-from-r)

Oh, forgot to say this is the article he got banned for:
https://21stcenturywire.com/2018/12/14/the-truth-behind-chinas-uyghur-problem/

Authored by F. William Engdahl, a LaRouchite.
If you're not familiar with the LaRouch movement, here's some reading for ya:

https://unicornriot.ninja/2019/eat-the-children-decades-of-far-right-larouche-provocations-renewed/

https://lyndonlarouchewatch.org/examples.htm

http://www.holocaustresearchproject.org/essays&editorials/duggan2.html

http://laroucheplanet.info/pmwiki/pmwiki.php?n=Cult.TheGaysLesbians

http://laroucheplanet.info/pmwiki/pmwiki.php?n=Cult.NaziJews

http://laroucheplanet.info/pmwiki/pmwiki.php?n=Cult.InferiorCultures

https://communemag.com/the-american-roots-of-a-right-wing-conspiracy/


That wasn't the only thing he linked to, he (and bayarea415) also kept linking to globalresearch.ca's articles to deny the Ughurs are being ethnically cleansed and to attack Hong Kong protesters. Globalresearch.ca is a notorious eurasianist conspiracy site that, among other things, denies the holocaust.

Edit: and the writer denies global warming is caused by humans, not that it doesn't exist. He also thinks oil has a non-biological origin.

And before anyone says to join another instance that they do not administer, any propagation of Lemmy supports them and their code base hush line of words.  

[Read more here](https://raddle.me/f/lobby/159606/-/comment/294792)
`,
    //#endregion
    //#region 
    `# Few words on lemmy

This mastodon thread should tell you what kind of crowds you are looking at: https://mstdn.social/@feditips/106835057054633379

Further more, take a look at the most ~~populated and~~ promoted instance, lemmygrad, then go to 4chan /pol/ board and find the /chug/ threads. They are both exactly the same.

Also, look at this funny post: https://raddle.me/f/TankiesGonnaTank/127114/-/comment/205326
`,
    //#endregion
    //#region 
    `# Lemmy.ml is blocking all requests from /kbin Instances

src: https://kbin.social/m/kbinMeta/t/104218

I discovered yesterday evening that Lemmy.ml is blocking all inbound ActivityPub requests from /kbin instances. Specifically, a 403 'access denied' is returned when the user agent contains "kbinBot" anywhere in the string. This has been causing a cascade of failures with federation for many server owners, flooding the message queue with transport errors.

This doesn't appear to be a mistake; it has been done very deliberately, only on Lemmy.ml. Lemmy.world and other large instances do not exhibit the same behavior. It also isn't a side effect of the bug introduced in Lemmy 0.18. You can observe by sending the following in a terminal

    > curl -I --user-agent "kbinBot v0.1" https://lemmy.world/u/test
    HTTP/2 200
    [...]

    > curl -I --user-agent "kbinBot v0.1" https://lemmy.ml/u/test                                
    HTTP/2 403
    [...]

    > curl -I --user-agent "notKbinBot v0.1" https://lemmy.ml/u/test
    HTTP/2 403
    [...]

    > curl -I --user-agent "placeholder-user-agent" https://lemmy.ml/u/test
    HTTP/2 200
    [...]

Additional evidence of this not being a Lemmy 0.18 bug:

- This occurs when making web requests to any location on the Lemmy.ml webserver, not just ActivityPub endpoints.

- Go to https://fedidb.org/software/lemmy and pick an instance running 0.18.0. Perform the above commands, replacing the URL for Lemmy.ml with that particular instance's address.

If this continues, my instance may need to defederate from Lemmy.ml. This is especially problematic because Lemmy.ml continues to federate information outbound to other kbin instances while refusing to allow inbound communication from them.

Spoofing the user agent is less than ideal, and doesn't respect Lemmy.ml's potential wish to not be contacted by /kbin instances. I don't post this to create division between communities, but I do hope that I can draw awareness to what's going on here. Defederating /kbin instances entirely would even be better than arbitrarily denying access one-way. This said, we should all attempt to maintain a good-faith interpretation until otherwise indicated by the Lemmy developers. It's possibel that this is a firewall misconfiguration or some other webserver-related bug.

Relevant comment from me (#354 - [BUG] Critical errors/failed messages during messenger:consume)

Edits:

- Yes, people have already tried reaching out to the Lemmy instance admins in their Matrix room with no answer.

- Someone has posed a question on Lemmy.ml about the block here: https://lemmy.ml/post/1563840
    
`
    //#endregion
  ],
  /**
   * pool of random comment to drawn from. This pool will get zalgoified in an attempt to beat censorship
   */
  overwriteZalgo: [
    `fuck u/spez`, 
    `steve huffman is a j_ilb_it loving p_doph_le`,
  ],
  /** crawler will get the permalink of the comment, 
   * and perform `match()` against every `overwriteSkip` element, 
   * and skip comment overwrite if matched
   */
  overwriteSkip: [
    `comments/140op93/host_your_own_community_if_reddits_api_rules_go/jn3o0ad/`
  ],
  /** range of comments to overwrite.
   * 
   */
  overwriteRange: [[0,30], [33,49], [51,56]],
  /**
   * randomly choose between 0 to waitms millisecond
   */
  waitms: 5000,
}

const x = 's';
x.match('')