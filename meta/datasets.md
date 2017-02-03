---
layout: post
title: "List of datasets"
permalink: "/meta/datasets"
---

# List of datasets

**Endpoint:** [https://knoema.com/api/1.0/meta/dataset](https://knoema.com/api/1.0/meta/dataset "dataset endpoint") <br>
Returns the list of datasets<br>
**Response**

<table class="table">
<thead>
	<tr>
		<th>Name</th>
		<th>Type</th>
		<th>Description</th>		
	</tr>
</thead>
<tbody>
	<tr>
		<td>dimensions</td>
		<td>List&lt;Dimension&gt;</td>
		<td>
			List of dimensions associated with the dataset.<br>
			Consists of&nbsp;<br>
			&nbsp;Key:&nbsp;Unique key to identify a dimension<br>
			&nbsp;Id:&nbsp;Dimension id (unique only across the dataset)<br>
			&nbsp;Name:&nbsp;Dimension name</td>
	</tr>
	<tr>
		<td>source</td>
		<td>DatasetSource</td>
		<td>Data provider<br>
			Consists of<br>
			&nbsp;Id:&nbsp;Unique provider Id<br>
			&nbsp;Name:&nbsp;Provider's Name
		</td>
	</tr>
	<tr>
		<td>ref</td>
		<td>string</td>
		<td>Source url of dataprovider</td>
	</tr>
	<tr>
		<td>publicationDate</td>
		<td>date</td>
		<td>Date on which the dataset was published</td>
	</tr>
	<tr>
		<td>title</td>
		<td>string</td>
		<td>Normalized dataset name</td>
	</tr>
	<tr>
		<td>accessedOn</td>
		<td>date</td>
		<td>Date on which dataset is accessed from the source</td>
	</tr>
	<tr>
		<td>lastUpdatedOn</td>
		<td>date</td>
		<td>Date on which dataset is last modified</td>
	</tr>
	<tr>
		<td>hasGeoDimension</td>
		<td>bool</td>
		<td>Flag to specify whether dataset conatins any geographical dimensions</td>
	</tr>
	<tr>
		<td>replacementDataset</td>
		<td>string</td>
		<td>Upgraded dataset's id</td>
	</tr>
	<tr>
		<td>columns</td>
		<td>List&lt;Column&gt;</td>
		<td>List of dataset columns<br>
			Column consists of<br>
			&nbsp;Key:&nbsp;Unique key to identify a column<br>
			&nbsp;Name:&nbsp;Column name<br>
			&nbsp;Order:&nbsp;Order of column<br>
			&nbsp;Type:&nbsp;Type of column
		</td>
	</tr>
	<tr>
		<td>type</td>
		<td>string</td>
		<td>Type of dataset</td>
	</tr>
	<tr>
		<td>regionDimensionId</td>
		<td>string</td>
		<td>Id of the geographical dimension of the dataset</td>
	</tr>
	<tr>
		<td>key</td>
		<td>int</td>
		<td>Dataset key&nbsp;</td>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>Unique identifier for a dataset&nbsp;</td>
	</tr>
	<tr>
		<td>name</td>
		<td>string</td>
		<td>Name of the dataset&nbsp;</td>
	</tr>
	<tr>
		<td>description</td>
		<td>string</td>
		<td>Details on the dataset</td>
	</tr>
	<tr>
		<td>owner</td>
		<td>string</td>
		<td>Owner of the dataset</td>
	</tr>
</tbody>
</table>

**Example**<br>
**Get:** [https://knoema.com/api/1.0/meta/dataset](https://knoema.com/api/1.0/meta/dataset "dataset endpoint")
{% highlight json %}
[
	{
		"dimensions": [
			{
				"key": 2125000,
				"id": "country",
				"name": "Country",
				"isGeo": true,
				"geoType": "region"
			},
			{
				"key": 2125010,
				"id": "subject",
				"name": "Subject",
				"isGeo": false,
				"geoType": null
			}
		],
		"ref": "http://www.imf.org/en/data",
		"hasGeoDimension": true,
		"hasGeoMapColumn": false,
		"hasLatLngColumn": false,
		"replacementDataset": {
			"id": "IMFWEO2016Oct",
			"name": "IMF World Economic Outlook (WEO), October 2016"
		},
		"columns": [
			{
				"key": 4900780,
				"name": "Country",
				"order": 1,
				"type": "Text"
			},
			{
				"key": 4900790,
				"name": "RegionId",
				"order": 2,
				"type": "Text"
			},
			{
				"key": 4900800,
				"name": "Id",
				"order": 3,
				"type": "Text"
			},
			{
				"key": 4900810,
				"name": "Subject",
				"order": 4,
				"type": "Text"
			},
			{
				"key": 4900820,
				"name": "SubjectDescription",
				"order": 5,
				"type": "Text"
			},
			{
				"key": 4900830,
				"name": "SubjectNotes",
				"order": 6,
				"type": "Text"
			},
			{
				"key": 4900840,
				"name": "Id",
				"order": 7,
				"type": "Text"
			},
			{
				"key": 4900850,
				"name": "Value",
				"order": 8,
				"type": "Number"
			},
			{
				"key": 4900860,
				"name": "Date",
				"order": 9,
				"type": "Date"
			}
		],
		"type": "Regular",
		"regionDimensionId": "country",
		"geoPositionDimensionId": null,
		"status": 2,
		"customMetadataFieldValues": null,
		"hasShortCut": false,
		"url": null,
		"settings": null,
		"isShortcut": false,
		"publicationDate": "2016-04-01T00:00:00",
		"title": "imf-world-economic-outlook-weo-april-2016",
		"accessedOn": "2016-04-14T00:00:00",
		"lastUpdatedOn": "2016-04-21T18:27:00",
		"source": {
			"id": "IMF",
			"name": "International Monetary Fund",
			"isVerified": true
		},
		"key": 2735370,
		"id": "IMFWEO2016Apr",
		"name": "IMF World Economic Outlook (WEO), April 2016",
		"description": "",
		"owner": "Knoema",
		"isPublic": true
	},
	{
		"dimensions": [
			{
				"key": 1630060,
				"id": "reporter",
				"name": "Reporter",
				"isGeo": true,
				"geoType": "region"
			},
			{ ... }
		],
		"ref": "http://comtrade.un.org/db/",
		"hasGeoDimension": true,
		"hasGeoMapColumn": false,
		"hasLatLngColumn": false,
		"replacementDataset": null,
		"columns": [
			{
				"key": 3363870,
				"name": "Reporter",
				"order": 1,
				"type": "Text"
			},
			{ ... }
		],
		"type": "Regular",
		"regionDimensionId": "reporter",
		"geoPositionDimensionId": null,
		"status": 2,
		"customMetadataFieldValues": null,
		"hasShortCut": false,
		"url": null,
		"settings": "{\"ColumnStoreFlag\":true,\"UseDataSessionFlag\":true,\"UseExtendedCountTablesFlag\":true,\"ColumnStoreTable\":\"[COMTRADE2015R1].[DataCol]\",\"ExtendedCountTablesUpdateStamp\":\"2016-07-28 07:11:05\"}",
		"isShortcut": true,
		"publicationDate": "2016-05-26T00:00:00",
		"title": "un-comtrade-merchandise-trade-by-commodity-hs-as-reported",
		"accessedOn": "2016-05-26T00:00:00",
		"lastUpdatedOn": "2016-07-28T06:17:12",
		"source": {
			"id": "UNSD",
			"name": "United Nations Statistics Division",
			"isVerified": true
		},
		"key": 2733950,
		"id": "xhxkuab",
		"name": "UN Comtrade: Merchandise trade by Commodity, HS - As Reported",
		"description": null,
		"owner": "Knoema",
		"isPublic": true
	},
	{ ... }
]
{% endhighlight %}