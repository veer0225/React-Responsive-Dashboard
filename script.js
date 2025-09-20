// eCommerce Dashboard Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu interactions
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });

    // Header button interactions
    const headerButtons = document.querySelectorAll('.header-btn');
    headerButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.style.background = '#FFFFFF';
            this.style.borderColor = '#3B82F6';
            this.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.background = '#F8FAFC';
            this.style.borderColor = '#E2E8F0';
            this.style.boxShadow = 'none';
        });
    }

    // Animate stat cards on load
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Animate chart bars
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        const originalHeight = bar.style.height;
        bar.style.height = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'height 0.8s ease';
            bar.style.height = originalHeight;
        }, 800 + index * 100);
    });

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.notification-item, .activity-item, .contact-item');
    interactiveElements.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(4px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Table row hover effects
    const tableRows = document.querySelectorAll('.table-row:not(.header)');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#F8FAFC';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Location item interactions
    const locationItems = document.querySelectorAll('.location-item');
    locationItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add selection effect
            locationItems.forEach(loc => loc.classList.remove('selected'));
            this.classList.add('selected');
            this.style.backgroundColor = '#EFF6FF';
            this.style.borderRadius = '6px';
            this.style.padding = '8px 12px';
        });
    });

    // Chart card interactions
    const chartCards = document.querySelectorAll('.chart-card');
    chartCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        });
    });

    // Donut chart animation
    const donutCircle = document.querySelector('.donut-circle');
    if (donutCircle) {
        donutCircle.style.opacity = '0';
        donutCircle.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            donutCircle.style.transition = 'all 0.8s ease';
            donutCircle.style.opacity = '1';
            donutCircle.style.transform = 'scale(1)';
        }, 1000);
    }

    // Profile button interaction
    const profileBtn = document.querySelector('.profile-btn');
    if (profileBtn) {
        profileBtn.addEventListener('click', function() {
            // Simulate profile menu toggle
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Sidebar toggle functionality
    const sidebarToggle = document.getElementById('sidebarToggle');
    const rightSidebar = document.querySelector('.right-sidebar');
    
    if (sidebarToggle && rightSidebar) {
        sidebarToggle.addEventListener('click', function() {
            rightSidebar.classList.toggle('closed');
            
            // Update button icon
            const icon = this.querySelector('.btn-icon');
            if (rightSidebar.classList.contains('closed')) {
                icon.textContent = '☰';
            } else {
                icon.textContent = '✕';
            }
        });
    }

    // Bar chart tooltips
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.addEventListener('mouseenter', function() {
            const value = this.getAttribute('data-value');
            if (value) {
                showTooltip(this, value);
            }
        });
        
        bar.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });

    // Line chart data points interaction
    const dataPoints = document.querySelectorAll('.line-svg circle');
    dataPoints.forEach(point => {
        point.addEventListener('mouseenter', function() {
            const x = this.getAttribute('cx');
            const y = this.getAttribute('cy');
            const isCurrent = this.getAttribute('fill') === '#1E293B';
            const value = isCurrent ? '$58,211' : '$68,768';
            showTooltip(this, value);
        });
        
        point.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });

    // Sidebar section toggles
    const sectionToggles = document.querySelectorAll('.section-toggle');
    sectionToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const targetId = this.getAttribute('data-target');
            const content = document.getElementById(targetId + '-content');
            const header = this.closest('.sidebar-section-header');
            
            if (content && header) {
                // Toggle the collapsed state
                const isCollapsed = content.classList.contains('collapsed');
                
                if (isCollapsed) {
                    // Expand
                    content.classList.remove('collapsed');
                    this.classList.remove('collapsed');
                    this.querySelector('.toggle-icon').textContent = '▼';
                } else {
                    // Collapse
                    content.classList.add('collapsed');
                    this.classList.add('collapsed');
                    this.querySelector('.toggle-icon').textContent = '▶';
                }
            }
        });
    });

    // Make section headers clickable
    const sectionHeaders = document.querySelectorAll('.sidebar-section-header');
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const toggle = this.querySelector('.section-toggle');
            if (toggle) {
                toggle.click();
            }
        });
    });
});

// Update real-time data
function updateRealTimeData() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        const currentValue = stat.textContent;
        const isPositive = currentValue.includes('+');
        const isCurrency = currentValue.includes('$');
        const isPercentage = currentValue.includes('%');
        
        // Simulate small random changes
        const change = (Math.random() - 0.5) * 0.05;
        let newValue;
        
        if (isCurrency) {
            const numValue = parseFloat(currentValue.replace(/[$,]/g, ''));
            newValue = (numValue * (1 + change)).toFixed(0);
            stat.textContent = '$' + newValue;
        } else if (isPercentage) {
            const numValue = parseFloat(currentValue.replace('%', ''));
            newValue = Math.max(0, (numValue * (1 + change)).toFixed(1));
            stat.textContent = newValue + '%';
        } else if (isPositive) {
            const numValue = parseInt(currentValue.replace(/[+,]/g, ''));
            newValue = Math.max(0, Math.floor(numValue * (1 + change)));
            stat.textContent = '+' + newValue.toLocaleString();
        } else {
            const numValue = parseInt(currentValue.replace(/[,]/g, ''));
            newValue = Math.max(0, Math.floor(numValue * (1 + change)));
            stat.textContent = newValue.toLocaleString();
        }
    });
}

// Update data every 30 seconds
setInterval(updateRealTimeData, 30000);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.blur();
            searchInput.value = '';
        }
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll effects
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Tooltip functions
function showTooltip(element, text) {
    // Remove existing tooltip
    hideTooltip();
    
    const tooltip = document.createElement('div');
    tooltip.className = 'chart-tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: #1E293B;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 500;
        z-index: 1000;
        pointer-events: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        white-space: nowrap;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    tooltip.style.left = (rect.left + rect.width / 2 - tooltipRect.width / 2) + 'px';
    tooltip.style.top = (rect.top - tooltipRect.height - 8) + 'px';
}

function hideTooltip() {
    const existingTooltip = document.querySelector('.chart-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
}
