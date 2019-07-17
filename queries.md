# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

```
select s.SupplierName, p.ProductName
from products as p
left join suppliers as s on s.supplierId = p.supplierId
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

```
select s.ShipperName, o.OrderID, o.OrderDate
from orders as o
left join shippers as s on s.ShipperId = o.ShipperId
where o.OrderDate < '1997-01-09'
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

```
select p.ProductName, od.Quantity, od.OrderID
from OrderDetails as od
left join Products as p on od.ProductId = p.ProductId
where od.OrderID = 10251
Order By p.ProductName
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

```
select o.OrderID as OrderId , c.CustomerName as CustomerName, e.LastName as EmployeeLastName
from Orders as o
inner join customers as c on c.CustomerID = o.CustomerID
join employees as e on e.EmployeeID = o.EmployeeID
```

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
