---
layout: post
title: "Datasets and dimensions"
permalink: "/concepts/datasets-and-dimensions"
categories: ["concepts"]
---

# Datasets and dimensions 

The basic unit of data or information in Knoema is **dataset**. Each dataset contains structured information on specific topic and has name, description, source and publication date. Users can upload their own datasets using [Dataset Upload](https://knoema.com/user/lightupload "Data Upload") tool. Like any other resources datasets can be shared, pinned, discussed etc.

Each dataset consists of **observations** or **records** which hold numerical values (data) and descriptive information (metadata) about these values. Metadata is used typically to categorize data (structural metadata) or provide additional information about data (referential metadata). Typical examples of structural metadata are country/region information, name of indicator etc. Referential metadata is used to keep various notes/comments about data.

Each dataset in Knoema has a number of associated **dimensions** used to categorize data in this dataset. Each dimension is an ordered hierarchical list of values or **dimension members**. Dataset's dimension are used as filters while accessing data. For example, in a dataset having Country and Indicator dimensions user can select all population data for United States by setting filter to Country = United States and Indicator = Population.