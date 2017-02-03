---
layout: post
title: "DCAT support"
permalink: "/opendata/dcat"
categories: ["opendata"]
---

# DCAT

Knoema platform supports Data Catalog vocabulary standard for data discovery and retrieval.  All public datasets in Knoema are serialized in RDF/XML format. All DCAT endpoints are available under http://knoema.com/api/1.0/dcat namespace.

## How to retrieve data Catalog

To retrieve data catalog make a HTTP GET request to http://knoema.com/api/1.0/dcat. The endpoint takes no input parameters and returns an XML/RDF document in response, which contains the description of catalog and list of public datasets.

<pre>GET https://knoema.com/api/1.0/dcat</pre>
{% highlight html %}
<rdf:RDF xmlns:dcat="http://www.w3.org/ns/dcat#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:foaf="http://xmlns.com/foaf/0.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <dcat:Catalog>
        <dcterms:title>Knoema - Data</dcterms:title>
        <rdfs:label>Knoema - Data</rdfs:label>
        <foaf:homepage rdf:resource="http://knoema.com/data"/>
        <dcterms:language>en</dcterms:language>
        <dcterms:license rdf:resource="http://knoema.com/legal/termsofuse"/>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAOFSS2010Jun</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAOFSSLSF2010Jun</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAOPRDSC2010Sep</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAOPRDSLS2010Sep</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAORSLand2009Sep</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAORSMachinery2010Dec</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAOTS2010Nov</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/WBADI2010Mar</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/WBDB2010Nov</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/WBMDG2010Dec</dcat:Dataset>
        ...
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAOFBS2010Jun</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAOPOPS2009Sep</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAOPS2010Sep</dcat:Dataset>
        <dcat:Dataset>http://dev.knoema.org/api/1.0/dcat/UNFAORSF2010Jun</dcat:Dataset>
    </dcat:Catalog>
</rdf:RDF>
{% endhighlight %}

## How to retrieve dataset metadata

To retrieve metadata for specific dataset it's necessary to send HTTP GET request to the following URL:

```
https://knoema.com/api/1.0/dcat/<datasetId>
```

Response will contain an XML/RDF structure with nested information about dataset represented in terms from Dublin Core vocabulary.

<pre>GET https://knoema.com/api/1.0/dcat/OECDHDHCU2011</pre>
{% highlight xml %}
<rdf:RDF xmlns:dcat="http://www.w3.org/ns/dcat#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:foaf="http://xmlns.com/foaf/0.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <dcat:Dataset rdf:about="OECDHDHCU2011">
        <dcterms:title>Health Data - Health Care Utilisation</dcterms:title>
        <foaf:homepage rdf:resource="http://dev.knoema.org/OECDHDHCU2011"/>
        <dcterms:description>OECD Health Data 2010 offers the most comprehensive source of comparable statistics on health and health systems across OECD countries. It is an essential tool for health researchers and policy advisors in governments, the private sector and the academic community, to carry out comparative analyses and draw lessons from international comparisons of diverse health care systems.</dcterms:description>
        <dcterms:keyword>@africa,Health</dcterms:keyword>
        <dcterms:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#date">12/1/2011</dcterms:issued>
        <dcterms:updated rdf:datatype="http://www.w3.org/2001/XMLSchema#date">12/2/2011</dcterms:updated>
        <dcterms:publisher>
            <foaf:Organization>
                <rdfs:label>Organisation for Economic Co-operation and Development</rdfs:label>
                <foaf:homepage rdf:resource="http://stats.oecd.org/Index.aspx"/>
            </foaf:Organization>
        </dcterms:publisher>
        <dcat:Distribution>http://dev.knoema.org/api/1.0/dcat/distribution/OECDHDHCU2011</dcat:Distribution>
    </dcat:Dataset>
</rdf:RDF>
{% endhighlight %}

Here response contains information about dataset title, tags, published date, publisher and distribution link.

## How to retrieve dataset distribution

Distribution represents a specific available form of a dataset. In Knoema Distribution represented by a web service that enables access to the data of a dataset.
This web service is described by access url and format of data. To retrieve dataset distribution make a HTTP GET request to https://knoema.com/api/1.0/dcat/distribution/<datasetId>.

<pre>GET https://knoema.com/api/1.0/dcat//distribution/OECDHDHCU2011</pre>
{% highlight xml %}
<rdf:RDF xmlns:dcat="http://www.w3.org/ns/dcat#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:foaf="http://xmlns.com/foaf/0.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <dcat:WebService rdf:about="OECDHDHCU2011">
        <dcat:accessURL>http://dev.knoema.org/api/1.0/data/dataset/OECDHDHCU2011</dcat:accessURL>
        <dcat:title>API endpoint for "Health Data - Health Care Utilisation" dataset</dcat:title>
        <dcterms:format>
            <dcterms:IMT>
                <rdf:value>application/json</rdf:value>
                <rdfs:label>json</rdfs:label>
            </dcterms:IMT>
        </dcterms:format>
    </dcat:WebService>
</rdf:RDF>
{% endhighlight %}

The endpoint returns a XML/RDF document which contains API endpoint for getting dataset data and format of response.

Read about [DCAT](http://dvcs.w3.org/hg/gld/raw-file/default/dcat/index.html "Data Catalog Vocabulary (DCAT)").