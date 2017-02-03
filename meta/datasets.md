---
layout: post
title: "List of datasets"
permalink: "/meta/datasets"
---

# List of datasets

**Endpoint:** [](https://knoema.com/api/1.0/meta/dataset)
Returns the list of datasets
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
			Key:&nbsp;Unique key to identify a dimension<br>
			Id:&nbsp;Dimension id (unique only across the dataset)<br>
			Name:&nbsp;Dimension name</td>
	</tr>
	<tr>
		<td>source</td>
		<td>DatasetSource</td>
		<td>Data provider&nbsp;Consists of<br>
			Id:&nbsp;Unique provider Id<br>
			Name:&nbsp;Provider's Name
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
			Key:&nbsp;Unique key to identify a column<br>
			Name:&nbsp;Column name<br>
			Order:&nbsp;Order of column<br>
			Type:&nbsp;Type of column
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