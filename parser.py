import csv
import json

INFILE = "data.csv"
OUTFILE = "edges.json"

csvfile = open(INFILE, 'r')
jsonfile = open(OUTFILE, 'w')

JSON_LINE = "{from: '{0}', to: {1}, value: {2}},"


fieldnames = ("from","to","value")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    row.pop(None, None)
    row['value'] = float(row['value'])
    json.dump(row, jsonfile, sort_keys=True)
    jsonfile.write(',\n')