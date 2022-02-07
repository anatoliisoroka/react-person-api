## How to Run
### `npm start`

## Notes

1. Created personApi to mock the fake apis.\
    There are two methods(getJSONData and getXMLData).
2. Used useState and useEffect hooks.\
    There is 'persons' state var.\
    Called personApi(both getJSONData and getXMLData) within useEffect hook.\
    Updated 'persons' state after successful calls.
3. Loop through the 'persons' and displayed the data in the UI.\
    Created a PersonCard component.\
    Before rendering sorted the 'persons' by Id.