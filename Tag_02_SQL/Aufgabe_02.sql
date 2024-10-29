(https://www.w3schools.com/sql/trysql.asp?filename=trysql_asc)

1. SELECT * FROM Customers WHERE CustomerName LIKE 'A%';
2. SELECT * FROM Customers ORDER BY PostalCode DESC;
3. SELECT * FROM Customers WHERE Country = 'Mexico' ORDER BY City ASC, CustomerName ASC;
4. SELECT * FROM Customers WHERE Country IN ('Germany', 'UK', 'France');
5. SELECT * FROM Products WHERE Unit LIKE '%bottles%';
6. SELECT * FROM Products WHERE Price BETWEEN 20 AND 30;
7. SELECT CategoryID, COUNT (ProductID) AS AnzahlDerProdukte FROM Products GROUP BY CategoryID;