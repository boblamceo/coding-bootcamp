"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var summary_1 = require("./summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
