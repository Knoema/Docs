---
layout: post
title: "Gadget"
permalink: "/widgets/gadget"
categories: ["widgets"]
---

# Gadget Widget

Any gadget from any public page can be embedded into external web site or blog post. The example of embedded gadget you can see below:

<iframe src="https://knoema.com/resource/embed/kiywikd/first" frameborder="0" scrolling="no" style="height: 500px; width: 100%;"></iframe>

In order to get embedding HTML-snippet for gadget you need to invoke its menu and select "Embed" command. You will get HTML-snippet like one below:

{% highlight html %}
<iframe src="http://knoema.com/resource/embed/kiywikd/first" scrolling="no" frameborder="0"
style="height:600px; width:910px;">
</iframe>
{% endhighlight %}

Just insert this snippet into desired location of your web site or blog post. Gadget width and height can be adjusted by modifying **width** and **height** properties of **style** attribute for **iframe** tag.
