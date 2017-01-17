---
layout: post
title: "SDMX"
permalink: "/opendata/sdmx"
categories: ["opendata"]
---

# SDMX

Knoema platform supports subset of the [SDMX 2.0](https://sdmx.org/?page_id=16 "SDMX 2.0 Technical Specifications") standard for data discovery and retrieval. All public datasets in Knoema are accessible and can be read with SDMX-compatible clients. All SDMX endpoints are available under http://knoema.com/api/1.0/sdmx namespace. 

## How to enumerate datasets

To enumerate all public datasets make HTTP GET request to http://knoema.com/api/1.0/sdmx. This endpoint takes no input parameters and returns Structure message in response. For every dataset there is a key family defined within response's **Structure** message.

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
 <message:structure xmlns="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/structure" xmlns:message="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/message" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/structure http://www.sdmx.org/docs/2_0/SDMXStructure.xsd http://www.SDMX.org/resources/SDMXML/schemas/v2_0/message http://www.sdmx.org/docs/2_0/SDMXMessage.xsd">
         <Header xmlns="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/message">
                 <Id>none</Id>
                 <Truncated>false</Truncated>
                 <Prepared>2/14/2012 10:47:07 AM</Prepared>
                 <Sender Id="Knoema">
                         <name xml:lang="en">Knoema Technologies</name>
                 </Sender>
         </Header>
         <message:KeyFamilies>
                 <Keyfamily Id="IMFWEO2011Sep" AgencyId="knoema">
                         <Name xml:lang="en">World Economic Outlook, September 2011</Name>
                 </Keyfamily>
                 <Keyfamily Id="OECDEO90" AgencyId="knoema">
                         <Name xml:lang="en">Economic Outlook No 90, December 2011</Name>
                 </Keyfamily>
                 <Keyfamily Id="WBWDIGDF2011Dec" AgencyId="knoema">
                         <Name xml:lang="en">World Development Indicators (WDI) & Global Development Finance (GDF), December 2011</Name>
                 </Keyfamily>
         </message:KeyFamilies>
 </message:structure>
{% endhighlight %}