import React, { useState, useMemo } from 'react';

const OrdersTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    dateRange: 'all'
  });

  const orders = [
    {
      id: 'CM9801',
      user: 'Natall Craig',
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress',
      statusColor: 'purple',
      timestamp: new Date()
    },
    {
      id: 'CM9802',
      user: 'Kate Morrison',
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete',
      statusColor: 'green',
      timestamp: new Date(Date.now() - 60000)
    },
    {
      id: 'CM9803',
      user: 'Drew Cano',
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending',
      statusColor: 'blue',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 'CM9804',
      user: 'Orlando Diggs',
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved',
      statusColor: 'yellow',
      timestamp: new Date(Date.now() - 86400000)
    },
    {
      id: 'CM9805',
      user: 'Andi Lane',
      project: 'Client Project',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected',
      statusColor: 'gray',
      timestamp: new Date('2023-02-02')
    },
    {
      id: 'CM9806',
      user: 'John Smith',
      project: 'Mobile App',
      address: 'Main Street Boston',
      date: '2 hours ago',
      status: 'In Progress',
      statusColor: 'purple',
      timestamp: new Date(Date.now() - 7200000)
    },
    {
      id: 'CM9807',
      user: 'Sarah Johnson',
      project: 'E-commerce Site',
      address: 'Oak Avenue Seattle',
      date: '3 days ago',
      status: 'Complete',
      statusColor: 'green',
      timestamp: new Date(Date.now() - 259200000)
    },
    {
      id: 'CM9808',
      user: 'Mike Wilson',
      project: 'Analytics Dashboard',
      address: 'Pine Street Denver',
      date: '1 week ago',
      status: 'Pending',
      statusColor: 'blue',
      timestamp: new Date(Date.now() - 604800000)
    }
  ];

  const handleRowClick = (orderId) => {
    setSelectedRow(selectedRow === orderId ? null : orderId);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1);
  };

  const handleAddOrder = () => {
    alert('Add new order functionality would be implemented here');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 5;

  const getStatusDot = (color) => {
    const colorMap = {
      purple: '#8B5CF6',
      green: '#10B981',
      blue: '#3B82F6',
      yellow: '#F59E0B',
      gray: '#6B7280'
    };
    return colorMap[color] || '#6B7280';
  };

  // Filter and sort data
  const filteredAndSortedOrders = useMemo(() => {
    let filtered = orders.filter(order => {
      const matchesSearch = searchTerm === '' || 
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.status.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = filters.status === 'all' || order.status === filters.status;

      return matchesSearch && matchesStatus;
    });

    if (sortField) {
      filtered.sort((a, b) => {
        let aValue = a[sortField];
        let bValue = b[sortField];

        if (sortField === 'timestamp') {
          aValue = a.timestamp;
          bValue = b.timestamp;
        }

        if (typeof aValue === 'string') {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [orders, searchTerm, filters, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = filteredAndSortedOrders.slice(startIndex, endIndex);

  return (
    <div className="orders-table-container">
      <div className="table-header">
        <div className="table-header-left">
          <button className="table-btn add-btn" title="Add" onClick={handleAddOrder}>
            <span className="btn-icon">+</span>
          </button>
          <button 
            className={`table-btn filter-btn ${showFilters ? 'active' : ''}`} 
            title="Filter" 
            onClick={() => setShowFilters(!showFilters)}
          >
            <span className="btn-icon">☰</span>
          </button>
          <button className="table-btn sort-btn" title="Sort" onClick={() => handleSort('timestamp')}>
            <span className="btn-icon">{sortField === 'timestamp' ? (sortDirection === 'asc' ? '↑' : '↓') : '⇅'}</span>
          </button>
        </div>
        <div className="table-header-right">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="table-search-input"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="filter-panel">
          <div className="filter-group">
            <label>Status:</label>
            <select 
              value={filters.status} 
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Date Range:</label>
            <select 
              value={filters.dateRange} 
              onChange={(e) => handleFilterChange('dateRange', e.target.value)}
              className="filter-select"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>
      )}
      
      <div className="table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th className="checkbox-column">
                <input type="checkbox" className="table-checkbox" />
              </th>
              <th 
                className="sortable-header" 
                onClick={() => handleSort('id')}
                title="Click to sort by Order ID"
              >
                Order ID
                {sortField === 'id' && (
                  <span className="sort-indicator">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th 
                className="sortable-header" 
                onClick={() => handleSort('user')}
                title="Click to sort by User"
              >
                User
                {sortField === 'user' && (
                  <span className="sort-indicator">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th 
                className="sortable-header" 
                onClick={() => handleSort('project')}
                title="Click to sort by Project"
              >
                Project
                {sortField === 'project' && (
                  <span className="sort-indicator">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th 
                className="sortable-header" 
                onClick={() => handleSort('address')}
                title="Click to sort by Address"
              >
                Address
                {sortField === 'address' && (
                  <span className="sort-indicator">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th 
                className="sortable-header" 
                onClick={() => handleSort('timestamp')}
                title="Click to sort by Date"
              >
                Date
                {sortField === 'timestamp' && (
                  <span className="sort-indicator">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th 
                className="sortable-header" 
                onClick={() => handleSort('status')}
                title="Click to sort by Status"
              >
                Status
                {sortField === 'status' && (
                  <span className="sort-indicator">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th className="actions-column"></th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr 
                key={order.id}
                className={`table-row ${selectedRow === order.id ? 'selected' : ''}`}
                onClick={() => handleRowClick(order.id)}
              >
                <td className="checkbox-column">
                  <input 
                    type="checkbox" 
                    className="table-checkbox"
                    checked={selectedRow === order.id}
                    onChange={() => handleRowClick(order.id)}
                  />
                </td>
                <td className="order-id">#{order.id}</td>
                <td className="user-cell">
                  <div className="user-info">
                    <div className="user-avatar">
                      {order.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="user-name">{order.user}</span>
                  </div>
                </td>
                <td className="project-cell">{order.project}</td>
                <td className="address-cell">
                  <div className="address-info">
                    <span className="address-text">{order.address}</span>
                    {selectedRow === order.id && (
                      <span className="address-icon">📄</span>
                    )}
                  </div>
                </td>
                <td className="date-cell">
                  <div className="date-info">
                    <span className="date-icon">📅</span>
                    <span className="date-text">{order.date}</span>
                  </div>
                </td>
                <td className="status-cell">
                  <div className="status-info">
                    <div 
                      className="status-dot" 
                      style={{ backgroundColor: getStatusDot(order.statusColor) }}
                    ></div>
                    <span className="status-text">{order.status}</span>
                  </div>
                </td>
                <td className="actions-column">
                  <button className="actions-btn" title="More actions">
                    <span className="btn-icon">⋯</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="table-footer">
        <div className="pagination-info">
          <span>
            Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedOrders.length)} of {filteredAndSortedOrders.length} results
          </span>
        </div>
        <div className="pagination">
          <button 
            className="pagination-btn" 
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <span>‹</span>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button 
              key={page}
              className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button 
            className="pagination-btn" 
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span>›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
