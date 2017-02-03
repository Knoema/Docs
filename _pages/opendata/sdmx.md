---
layout: post
title: "SDMX"
permalink: "/opendata/sdmx"
categories: ["opendata"]
---

# SDMX

Knoema platform supports subset of the [SDMX 2.0](https://sdmx.org/?page_id=16 "SDMX 2.0 Technical Specifications") standard for data discovery and retrieval. All public datasets in Knoema are accessible and can be read with SDMX-compatible clients. All SDMX endpoints are available under http://knoema.com/api/1.0/sdmx namespace. 

## How to enumerate datasets

To enumerate all public datasets make HTTP GET request to <http://knoema.com/api/1.0/sdmx>. This endpoint takes no input parameters and returns Structure message in response. For every dataset there is a key family defined within response's **Structure** message.

<pre>GET <https://knoema.com/api/1.0/sdmx></pre>
{% highlight html %}
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

## How to retrieve dataset metadata

To retrieve metadata for specific dataset it's necessary to send HTTP GET request to the following URL:

```
http://knoema.com/api/1.0/sdmx/<datasetId>
```

Here **datasetId** is id of corresponding dataset returned by enumeration endpoint. Response will contain **Structure** message with nested information about dataset dimensions represented by **CodeLists** and dataset's structure described as key family components

<pre>GET <https://knoema.com/api/1.0/sdmx/OECDEO90></pre>
{% highlight html %}
<?xml version="1.0" encoding="utf-8"?>
<message:structure xmlns="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/structure" xmlns:message="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/message" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/structure http://www.sdmx.org/docs/2_0/SDMXStructure.xsd http://www.SDMX.org/resources/SDMXML/schemas/v2_0/message http://www.sdmx.org/docs/2_0/SDMXMessage.xsd">
    <Header xmlns="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/message">
        <Id>none</Id>
        <Truncated>false</Truncated>
        <Prepared>2/14/2012 10:53:19 AM</Prepared>
        <Sender Id="Knoema">
            <name xml:lang="en">Knoema Technologies</name>
        </Sender>
    </Header>
    <message:CodeLists>
        <CodeList id="CL_OECDEO90_Location" agencyId="Knoema" isFinal="True">
            <Name xml:lang="en">Location codelist</Name>
            <Code value="1000000">
                <Description xml:lang="en">Australia</Description>
            </Code>
            <Code value="1000010">
                <Description xml:lang="en">Austria</Description>
            </Code>
            <Code value="1000020">
                <Description xml:lang="en">Belgium</Description>
            </Code>
        </CodeList>
        <CodeList id="CL_OECDEO90_Variable" agencyId="Knoema" isFinal="True">
            <Name xml:lang="en">Variable codelist</Name>
            <Code value="1000000">
                <Description xml:lang="en">External sectors, trade and payments</Description>
            </Code>
            <Code value="1000010" parentCode="1000000">
                <Description xml:lang="en">Balance of income, value in USD, balance of payments basis</Description>
            </Code>
        </CodeList>
        <CodeList id="CL_OECDEO90_UNIT" agencyId="Knoema" isFinal="True">
            <Name xml:lang="en">Unit of measure</Name>
            <Code value="1192020">
                <Description xml:lang="en">Percentage of GDP</Description>
            </Code>
            <Code value="1190640">
                <Description xml:lang="en">growth rate</Description>
            </Code>
            <Code value="1192040">
                <Description xml:lang="en">Value in USD</Description>
            </Code>
            <Code value="1192000">
                <Description xml:lang="en">level</Description>
            </Code>
        </CodeList>
        <CodeList id="CL_UNIT_MULT" agencyId="Knoema" isFinal="True">
            <Name xml:lang="en">Multiplication factor</Name>
            <Code value="1">
                <Description xml:lang="en">Units</Description>
            </Code>
            <Code value="1000">
                <Description xml:lang="en">Thousands</Description>
            </Code>
            <Code value="1000000">
                <Description xml:lang="en">Millions</Description>
            </Code>
            <Code value="1000000000">
                <Description xml:lang="en">Billions</Description>
            </Code>
        </CodeList>
        <CodeList id="CL_FREQ" agencyId="Knoema" isFinal="True">
            <Name xml:lang="en">Frequency Codelist</Name>
            <Code value="A">
                <Description xml:lang="en">Annual</Description>
            </Code>
        </CodeList>
        <CodeList id="CL_TIME_FORMAT" agencyId="Knoema" isFinal="True">
            <Name xml:lang="en">Time Formats based on ISO 8601</Name>
            <Code value="P1Y">
                <Description xml:lang="en">Annual</Description>
            </Code>
            <Code value="P6M">
                <Description xml:lang="en">Semi-annual</Description>
            </Code>
            <Code value="P3M">
                <Description xml:lang="en">Quarterly</Description>
            </Code>
        </CodeList>
    </message:CodeLists>
    <message:Concepts>
        <ConceptScheme id="OECDEO90" agencyId="Knoema" isFinal="True">
            <Name xml:lang="en">Economic Outlook No 90, December 2011</Name>
            <Concept id="Location" agencyId="Knoema">
                <name xml:lang="en">Location</name>
            </Concept>
            <Concept id="Variable" agencyId="Knoema">
                <name xml:lang="en">Variable</name>
            </Concept>
            <Concept id="UNIT" agencyId="Knoema">
                <name xml:lang="en">Unit of measure</name>
            </Concept>
            <Concept id="UNIT_MULT" agencyId="Knoema">
                <name xml:lang="en">Multiplication factor</name>
            </Concept>
            <Concept id="FREQ" agencyId="Knoema">
                <name xml:lang="en">Frequency</name>
            </Concept>
            <Concept id="TIME_PERIOD" agencyId="Knoema">
                <name xml:lang="en">Time</name>
            </Concept>
            <Concept id="TIME_FORMAT" agencyId="Knoema">
                <name xml:lang="en">Time format</name>
            </Concept>
            <Concept id="OBS_VALUE" agencyId="Knoema">
                <name xml:lang="en">Observation value</name>
            </Concept>
        </ConceptScheme>
    </message:Concepts>
    <message:KeyFamilies>
        <KeyFamily id="OECDEO90" agencyId="Knoema" isfinal="True">
            <Name xml:lang="en">Data Mapper</Name>
            <Components>
                <Dimension conceptRef="Location" conceptSchemaRef="OECDEO90" conceptVersion="1.0" conceptSchemeAgency="Knoema" codelist="CL_Location" codelistVersion="1.0" codelistAgency="Knoema" />
                <Dimension conceptRef="Variable" conceptSchemaRef="OECDEO90" conceptVersion="1.0" conceptSchemeAgency="Knoema" codelist="CL_Variable" codelistVersion="1.0" codelistAgency="Knoema" />
                <Dimension conceptRef="FREQ" conceptSchemaRef="OECDEO90" conceptVersion="1.0" conceptSchemeAgency="Knoema" codelist="CL_OECDEO90_FREQ" codelistVersion="1.0" codelistAgency="Knoema" isFrequencyDimension="True" />
                <TimeDimension ConceptRef="Time_period" conceptSchemeRef="OECDEO90" />
                <PrimaryMeasure conceptRef="OBS_VALUE" conceptSchemeRef="OECDEO90">
                    <TextFormat TextType="Double" />
                </PrimaryMeasure>
                <Attribute conceptref="UNIT" conceptSchemeRef="OECDEO90" conceptSchemeAgency="Knoema" codelist="CL_OECDEO90_UNIT" codelistAgency="Knoema" attachmentLevel="series" attachmentStatus="Mandatory" />
                <Attribute conceptref="UNIT_MULT" conceptSchemeRef="OECDEO90" conceptSchemeAgency="Knoema" codelist="CL_UNIT_MULT" codelistAgency="Knoema" attachmentLevel="series" attachmentStatus="Mandatory" />
                <Attribute conceptref="TIME_FORMAT" conceptSchemeRef="OECDEO90" conceptSchemeAgency="Knoema" codelist="CL_TIME_FORMAT" codelistAgency="Knoema" attachmentLevel="series" attachmentStatus="Mandatory" isTimeFormat="True">
                    <TextFormat TextType="String" />
                </Attribute>
            </Components>
        </KeyFamily>
    </message:KeyFamilies>
</message:structure>
{% endhighlight %}

## How to retrieve data

Knoema platform supports data retrieval in Compact SDMX format. To retrieve data from specific dataset HTTP GET request should be made to <http://knoema.com/api/1.0/sdmx/getdata> endpoint. This endpoint supports the following parameters:

|Parameter  |Description  |Status   |
|-----------|-------------|---------|
|dataflow   |Id of dataset|Mandatory|
|key        |This parameter is constructed from the list of dimension members included in request for the dataset. For every dimension there should be its members included into request listed and separated by "+" characted.      |Mandatory|

Response will contain data in Compact SDMX format encapsulated into Structure message.

<pre>GET https://knoema.com/api/1.0/sdmx/getdata?dataflow=OECDEO90&key=1000000+1000010+1000020.1000020.A</pre>
{% highlight html %}
<?xml version="1.0" encoding="utf-8"?>
<message:structure xmlns="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/structure" xmlns:message="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/message" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/structure http://www.sdmx.org/docs/2_0/SDMXStructure.xsd http://www.SDMX.org/resources/SDMXML/schemas/v2_0/message http://www.sdmx.org/docs/2_0/SDMXMessage.xsd">
    <Header xmlns="http://www.SDMX.org/resources/SDMXML/schemas/v2_0/message">
        <Id>none</Id>
        <Truncated>false</Truncated>
        <Prepared>2/20/2012 6:03:11 AM</Prepared>
        <Sender Id="Knoema">
            <name xml:lang="en">Knoema Technologies</name>
        </Sender>
    </Header>
    <Dataset xmlns="http://stats.oecd.org/Index.aspx">
        <Series Location="1000000" Variable="1000020" UNIT="Value in USD" UNIT_MULT="1" FREQ="A" TIME_FORMAT="P1Y">
            <Obs TIME_PERIOD="2008-01-01" OBS_VALUE="-48887064092.1203" />
            <Obs TIME_PERIOD="2009-01-01" OBS_VALUE="-43660522540.4393" />
            <Obs TIME_PERIOD="2010-01-01" OBS_VALUE="-33074447795.7296" />
            <Obs TIME_PERIOD="2011-01-01" OBS_VALUE="-24339007669.6158" />
            <Obs TIME_PERIOD="2012-01-01" OBS_VALUE="-21623949952.2715" />
            <Obs TIME_PERIOD="2013-01-01" OBS_VALUE="-32571575009.217" />
        </Series>
        <Series Location="1000010" Variable="1000020" UNIT="Value in USD" UNIT_MULT="1" FREQ="A" TIME_FORMAT="P1Y">
            <Obs TIME_PERIOD="2008-01-01" OBS_VALUE="20222082482.4646" />
            <Obs TIME_PERIOD="2009-01-01" OBS_VALUE="10391675554.0401" />
            <Obs TIME_PERIOD="2010-01-01" OBS_VALUE="11183006638.9317" />
            <Obs TIME_PERIOD="2011-01-01" OBS_VALUE="12653155894.7951" />
            <Obs TIME_PERIOD="2012-01-01" OBS_VALUE="14300321657.1923" />
            <Obs TIME_PERIOD="2013-01-01" OBS_VALUE="16707885963.3034" />
        </Series>
        <Series Location="1000020" Variable="1000020" UNIT="Value in USD" UNIT_MULT="1" FREQ="A" TIME_FORMAT="P1Y">
            <Obs TIME_PERIOD="2008-01-01" OBS_VALUE="-8030980304.67331" />
            <Obs TIME_PERIOD="2009-01-01" OBS_VALUE="-7464292628.42687" />
            <Obs TIME_PERIOD="2010-01-01" OBS_VALUE="6802282510.28172" />
            <Obs TIME_PERIOD="2011-01-01" OBS_VALUE="-2555054223.40259" />
            <Obs TIME_PERIOD="2012-01-01" OBS_VALUE="-1735537471.83463" />
            <Obs TIME_PERIOD="2013-01-01" OBS_VALUE="-1001621409.48415" />
        </Series>
    </Dataset>
</message:structure>
{% endhighlight %}