cat <<EOF > docs/use_cases.md
## Use Cases for Smart Logistics Optimization System

### Route Optimization

- **Description:** Optimize delivery routes based on real-time traffic and package priorities.
- **Actors:** Delivery managers, dispatchers
- **Steps:**
  - Input delivery locations and package details.
  - Compute optimal routes using Dijkstra's algorithm.
  - Display optimized routes and estimated delivery times.

### Real-time Vehicle Tracking

- **Description:** Monitor vehicle locations and update delivery statuses in real-time.
- **Actors:** Logistics coordinators, drivers
- **Steps:**
  - Transmit GPS data from vehicles.
  - Update vehicle positions dynamically on the map.
  - Alert on delays or route deviations.

### Warehouse Management

- **Description:** Manage inventory and optimize stock allocation across warehouses.
- **Actors:** Warehouse managers, inventory controllers
- **Steps:**
  - Track inventory movements with barcode scanning.
  - Optimize stock levels based on demand forecasts.
  - Generate reports on inventory turnover and availability.
EOF