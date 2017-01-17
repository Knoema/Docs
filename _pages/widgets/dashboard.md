---
layout: post
title: "Dashboard"
permalink: "/widgets/dashboard"
categories: ["widgets"]
---

# Dashboard Widget

Any public page can be embedded into external web site or blog post. The example of embedded dashboard you can see below:

<iframe src="https://knoema.com/resource/embed/iffaekg" frameborder="0" scrolling="no" style="height: 650px; width: 100%;"></iframe>

To embed dashboard the following HTML snippet should be used:

{% highlight html %}
<iframe style="width: 910px; height: 650px; border: 1px solid #ccc;" src="/resource/embed/<id>" frameborder="0" scrolling="no">
</iframe>
{% endhighlight %}

Here **`<id>`** is  identifier of selected dashboard you can look at browser address bar when page is opened. All dashboard in Knoema have 910px width by default so you need to make sure there is enough space on your web site or blog to accomodate it. 
