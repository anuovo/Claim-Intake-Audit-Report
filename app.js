const TODAY = "2026-06-29";

const reportData = [
  {
    salesOwner: "Vince Ballesteros",
    ticketNumber: "314906",
    reportDate: "2026-05-03",
    customer: "Growerstock",
    shipDate: "2026-05-01",
    arrivalDate: "2026-05-04",
    warehouse: "Los Angeles",
    qty: 120,
    productDescription: "Broccoli Crowns 20#",
    vendor: "D'Arrigo Brothers",
    commodityManager: "Natalie Brooks",
    ticketStatus: "Open",
    purchaseOrderDate: "2026-04-28",
    ticketCreatedDate: "2026-05-02",
    closedDate: "",
    initialReason: "Quality"
  },
  {
    salesOwner: "Vince Ballesteros",
    ticketNumber: "314906",
    reportDate: "2026-05-03",
    customer: "Growerstock",
    shipDate: "2026-05-01",
    arrivalDate: "2026-05-04",
    warehouse: "Los Angeles",
    qty: 80,
    productDescription: "Iceberg Lettuce 24ct",
    vendor: "Fresh Source",
    commodityManager: "Natalie Brooks",
    ticketStatus: "Open",
    purchaseOrderDate: "2026-04-28",
    ticketCreatedDate: "2026-05-02",
    closedDate: "",
    initialReason: "Quality"
  },
  {
    salesOwner: "Vince Ballesteros",
    ticketNumber: "69758",
    reportDate: "2026-05-11",
    customer: "Growerstock",
    shipDate: "2026-05-08",
    arrivalDate: "2026-05-09",
    warehouse: "Phoenix",
    qty: 100,
    productDescription: "Roma Tomatoes 25#",
    vendor: "Sun Valley Produce",
    commodityManager: "Natalie Brooks",
    ticketStatus: "Pending Customer Final",
    purchaseOrderDate: "2026-05-07",
    ticketCreatedDate: "2026-05-10",
    closedDate: "",
    initialReason: "Shortage"
  },
  {
    salesOwner: "Vince Ballesteros",
    ticketNumber: "69758",
    reportDate: "2026-05-11",
    customer: "Growerstock",
    shipDate: "2026-05-08",
    arrivalDate: "2026-05-09",
    warehouse: "Phoenix",
    qty: 50,
    productDescription: "Red Onions 50#",
    vendor: "D'Arrigo Brothers",
    commodityManager: "Natalie Brooks",
    ticketStatus: "Pending Customer Final",
    purchaseOrderDate: "2026-05-07",
    ticketCreatedDate: "2026-05-10",
    closedDate: "",
    initialReason: "Shortage"
  },
  {
    salesOwner: "Vince Ballesteros",
    ticketNumber: "12345-T",
    reportDate: "2026-05-18",
    customer: "Buyer Co.",
    shipDate: "2026-05-14",
    arrivalDate: "2026-05-17",
    warehouse: "Dallas",
    qty: 70,
    productDescription: "Cucumbers Select 12ct",
    vendor: "Coastal Fresh",
    commodityManager: "Vanessa Bennett",
    ticketStatus: "Approver",
    purchaseOrderDate: "2026-05-11",
    ticketCreatedDate: "2026-05-18",
    closedDate: "",
    initialReason: "Temperature"
  },
  {
    salesOwner: "Vince Ballesteros",
    ticketNumber: "12345-T",
    reportDate: "2026-05-18",
    customer: "Buyer Co.",
    shipDate: "2026-05-14",
    arrivalDate: "2026-05-17",
    warehouse: "Dallas",
    qty: 30,
    productDescription: "Green Bell Peppers 11#",
    vendor: "Fresh Source",
    commodityManager: "Vanessa Bennett",
    ticketStatus: "Approver",
    purchaseOrderDate: "2026-05-11",
    ticketCreatedDate: "2026-05-18",
    closedDate: "",
    initialReason: "Temperature"
  },
  {
    salesOwner: "Vince Ballesteros",
    ticketNumber: "233222",
    reportDate: "2026-05-26",
    customer: "Buyer Co.",
    shipDate: "2026-05-22",
    arrivalDate: "2026-05-24",
    warehouse: "Atlanta",
    qty: 60,
    productDescription: "Broccoli Crowns 20#",
    vendor: "D'Arrigo Brothers",
    commodityManager: "Natalie Brooks",
    ticketStatus: "Open",
    purchaseOrderDate: "2026-05-20",
    ticketCreatedDate: "2026-05-25",
    closedDate: "",
    initialReason: "Quality"
  },
  {
    salesOwner: "Vince Ballesteros",
    ticketNumber: "233222",
    reportDate: "2026-05-26",
    customer: "Buyer Co.",
    shipDate: "2026-05-22",
    arrivalDate: "2026-05-24",
    warehouse: "Atlanta",
    qty: 40,
    productDescription: "Cauliflower 9ct",
    vendor: "D'Arrigo Brothers",
    commodityManager: "Natalie Brooks",
    ticketStatus: "Open",
    purchaseOrderDate: "2026-05-20",
    ticketCreatedDate: "2026-05-25",
    closedDate: "",
    initialReason: "Quality"
  },
  {
    salesOwner: "Erica Flores",
    ticketNumber: "68484",
    reportDate: "2026-06-02",
    customer: "Buyer Co.",
    shipDate: "2026-05-28",
    arrivalDate: "2026-05-30",
    warehouse: "Los Angeles",
    qty: 90,
    productDescription: "Iceberg Lettuce 24ct",
    vendor: "Fresh Source",
    commodityManager: "Natalie Brooks",
    ticketStatus: "Closed",
    purchaseOrderDate: "2026-05-25",
    ticketCreatedDate: "2026-06-01",
    closedDate: "2026-06-06",
    initialReason: "Condition"
  },
  {
    salesOwner: "Erica Flores",
    ticketNumber: "756645",
    reportDate: "2026-06-06",
    customer: "Growerstock",
    shipDate: "2026-06-04",
    arrivalDate: "2026-06-07",
    warehouse: "Phoenix",
    qty: 110,
    productDescription: "Celery 30ct",
    vendor: "Coastal Fresh",
    commodityManager: "Marcus Reed",
    ticketStatus: "Pending Customer Final",
    purchaseOrderDate: "2026-06-01",
    ticketCreatedDate: "2026-06-06",
    closedDate: "",
    initialReason: "Incorrect Item"
  },
  {
    salesOwner: "Erica Flores",
    ticketNumber: "901177",
    reportDate: "2026-06-09",
    customer: "Market House",
    shipDate: "2026-06-05",
    arrivalDate: "2026-06-08",
    warehouse: "Seattle",
    qty: 95,
    productDescription: "Asparagus 11#",
    vendor: "Green Valley Farms",
    commodityManager: "Marcus Reed",
    ticketStatus: "Open",
    purchaseOrderDate: "2026-06-02",
    ticketCreatedDate: "2026-06-09",
    closedDate: "",
    initialReason: "Quality"
  },
  {
    salesOwner: "Erica Flores",
    ticketNumber: "901177",
    reportDate: "2026-06-09",
    customer: "Market House",
    shipDate: "2026-06-05",
    arrivalDate: "2026-06-08",
    warehouse: "Seattle",
    qty: 60,
    productDescription: "Broccolini 18ct",
    vendor: "Green Valley Farms",
    commodityManager: "Marcus Reed",
    ticketStatus: "Open",
    purchaseOrderDate: "2026-06-02",
    ticketCreatedDate: "2026-06-09",
    closedDate: "",
    initialReason: "Quality"
  },
  {
    salesOwner: "Mario Sanchez",
    ticketNumber: "555018",
    reportDate: "2026-06-11",
    customer: "Northstar Foods",
    shipDate: "2026-06-08",
    arrivalDate: "2026-06-10",
    warehouse: "Denver",
    qty: 75,
    productDescription: "Limes 40#",
    vendor: "Sun Valley Produce",
    commodityManager: "Camila Rivera",
    ticketStatus: "Open",
    purchaseOrderDate: "2026-06-06",
    ticketCreatedDate: "2026-06-10",
    closedDate: "",
    initialReason: "Damage"
  },
  {
    salesOwner: "Mario Sanchez",
    ticketNumber: "555018",
    reportDate: "2026-06-11",
    customer: "Northstar Foods",
    shipDate: "2026-06-08",
    arrivalDate: "2026-06-10",
    warehouse: "Denver",
    qty: 55,
    productDescription: "Avocados 48ct",
    vendor: "Sun Valley Produce",
    commodityManager: "Camila Rivera",
    ticketStatus: "Open",
    purchaseOrderDate: "2026-06-06",
    ticketCreatedDate: "2026-06-10",
    closedDate: "",
    initialReason: "Damage"
  },
  {
    salesOwner: "Mario Sanchez",
    ticketNumber: "777404",
    reportDate: "2026-06-14",
    customer: "Farmhouse Market",
    shipDate: "2026-06-10",
    arrivalDate: "2026-06-12",
    warehouse: "Chicago",
    qty: 88,
    productDescription: "Strawberries 8/1lb",
    vendor: "Berry Best",
    commodityManager: "Camila Rivera",
    ticketStatus: "Approver",
    purchaseOrderDate: "2026-06-08",
    ticketCreatedDate: "2026-06-13",
    closedDate: "",
    initialReason: "Shortage"
  },
  {
    salesOwner: "Mario Sanchez",
    ticketNumber: "777404",
    reportDate: "2026-06-14",
    customer: "Farmhouse Market",
    shipDate: "2026-06-10",
    arrivalDate: "2026-06-12",
    warehouse: "Chicago",
    qty: 46,
    productDescription: "Blueberries 12/6oz",
    vendor: "Berry Best",
    commodityManager: "Camila Rivera",
    ticketStatus: "Approver",
    purchaseOrderDate: "2026-06-08",
    ticketCreatedDate: "2026-06-13",
    closedDate: "",
    initialReason: "Shortage"
  },
  {
    salesOwner: "Lena Patel",
    ticketNumber: "882301",
    reportDate: "2026-06-18",
    customer: "Cedar Valley",
    shipDate: "2026-06-14",
    arrivalDate: "2026-06-16",
    warehouse: "Miami",
    qty: 102,
    productDescription: "Mangoes 9ct",
    vendor: "Tropics Direct",
    commodityManager: "Avery Patel",
    ticketStatus: "Closed",
    purchaseOrderDate: "2026-06-12",
    ticketCreatedDate: "2026-06-18",
    closedDate: "2026-06-25",
    initialReason: "Quality"
  },
  {
    salesOwner: "Lena Patel",
    ticketNumber: "882301",
    reportDate: "2026-06-18",
    customer: "Cedar Valley",
    shipDate: "2026-06-14",
    arrivalDate: "2026-06-16",
    warehouse: "Miami",
    qty: 64,
    productDescription: "Pineapples 8ct",
    vendor: "Tropics Direct",
    commodityManager: "Avery Patel",
    ticketStatus: "Closed",
    purchaseOrderDate: "2026-06-12",
    ticketCreatedDate: "2026-06-18",
    closedDate: "2026-06-25",
    initialReason: "Quality"
  },
  {
    salesOwner: "Lena Patel",
    ticketNumber: "992447",
    reportDate: "2026-06-21",
    customer: "Sunridge Retail",
    shipDate: "2026-06-18",
    arrivalDate: "2026-06-20",
    warehouse: "Houston",
    qty: 130,
    productDescription: "Russet Potatoes 50#",
    vendor: "Fieldstone Produce",
    commodityManager: "Avery Patel",
    ticketStatus: "Pending Customer Final",
    purchaseOrderDate: "2026-06-15",
    ticketCreatedDate: "2026-06-21",
    closedDate: "",
    initialReason: "Incorrect Item"
  },
  {
    salesOwner: "Lena Patel",
    ticketNumber: "992447",
    reportDate: "2026-06-21",
    customer: "Sunridge Retail",
    shipDate: "2026-06-18",
    arrivalDate: "2026-06-20",
    warehouse: "Houston",
    qty: 45,
    productDescription: "Yellow Onions 25#",
    vendor: "Fieldstone Produce",
    commodityManager: "Avery Patel",
    ticketStatus: "Pending Customer Final",
    purchaseOrderDate: "2026-06-15",
    ticketCreatedDate: "2026-06-21",
    closedDate: "",
    initialReason: "Incorrect Item"
  }
];

const filters = {
  salesOwnerFilter: document.getElementById("salesOwnerFilter"),
  customerFilter: document.getElementById("customerFilter"),
  warehouseFilter: document.getElementById("warehouseFilter"),
  vendorFilter: document.getElementById("vendorFilter"),
  commodityManagerFilter: document.getElementById("commodityManagerFilter"),
  statusFilter: document.getElementById("statusFilter"),
  productFilter: document.getElementById("productFilter"),
  initialReasonFilter: document.getElementById("initialReasonFilter"),
  startDate: document.getElementById("startDate"),
  endDate: document.getElementById("endDate")
};

const tableBody = document.getElementById("reportTableBody");
const tableSummary = document.getElementById("tableSummary");
const paginationSummary = document.getElementById("paginationSummary");
const paginationButtons = document.getElementById("paginationButtons");
const rowsPerPageSelect = document.getElementById("rowsPerPage");

const metricFields = {
  totalTicketsMetric: document.getElementById("totalTicketsMetric"),
  totalLineItemsMetric: document.getElementById("totalLineItemsMetric"),
  openTicketsMetric: document.getElementById("openTicketsMetric"),
  avgDaysOpenMetric: document.getElementById("avgDaysOpenMetric"),
  avgPoToShipMetric: document.getElementById("avgPoToShipMetric"),
  salesOwnersMetric: document.getElementById("salesOwnersMetric"),
  vendorsMetric: document.getElementById("vendorsMetric"),
  totalClaimedAmountMetric: document.getElementById("totalClaimedAmountMetric"),
  totalRecoveredAmountMetric: document.getElementById("totalRecoveredAmountMetric"),
  outstandingExposureMetric: document.getElementById("outstandingExposureMetric"),
  avgClaimValuePerTicketMetric: document.getElementById("avgClaimValuePerTicketMetric"),
  recoveryRateMetric: document.getElementById("recoveryRateMetric"),
  quantityCasesAffectedMetric: document.getElementById("quantityCasesAffectedMetric")
};

const insightTargets = {
  warehouse: document.getElementById("warehouseInsight"),
  vendor: document.getElementById("vendorInsight"),
  customer: document.getElementById("customerInsight"),
  productDescription: document.getElementById("productInsight"),
  initialReason: document.getElementById("initialReasonInsight"),
  weeklyTrend: document.getElementById("weeklyTrendInsight"),
  agingBucket: document.getElementById("agingBucketInsight")
};

const chartPalette = ["#66a61e", "#3b82f6", "#f97316", "#facc15", "#7c3aed", "#a3a3a3"];

let filteredData = [...reportData];
let currentPage = 1;
let rowsPerPage = Number(rowsPerPageSelect.value);
let sortState = { key: "reportDate", direction: "desc" };

function parseDate(value) {
  return new Date(`${value}T00:00:00`);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  }).format(parseDate(value));
}

function diffDays(start, end) {
  return Math.round((parseDate(end) - parseDate(start)) / 86400000);
}

function hashString(value) {
  return [...String(value)].reduce((accumulator, character) => {
    return (accumulator * 31 + character.charCodeAt(0)) % 1000003;
  }, 7);
}

function roundCurrency(value) {
  return Math.round(value * 100) / 100;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value || 0);
}

function formatWholeNumber(value) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
  }).format(value || 0);
}

function formatPercentage(value) {
  return `${(value || 0).toFixed(1)}%`;
}

function getPoToShipDays(item) {
  return diffDays(item.purchaseOrderDate, item.shipDate);
}

function getDaysOpen(item) {
  return diffDays(item.ticketCreatedDate, item.closedDate || TODAY);
}

function getFinancialSnapshot(item) {
  const seed = hashString(`${item.ticketNumber}-${item.productDescription}-${item.vendor}`);
  const baseRate = 8.75 + (seed % 700) / 100;
  const claimedAmount = roundCurrency(item.qty * baseRate);

  const commodityRecoveryRateByStatus = {
    Closed: 0.76,
    Approver: 0.58,
    "Pending Customer Final": 0.46,
    Open: 0.24
  };

  const commodityRecoveryRate = commodityRecoveryRateByStatus[item.ticketStatus] ?? 0.3;
  const commodityRecovery = roundCurrency(
    claimedAmount * Math.min(0.88, commodityRecoveryRate + ((seed % 9) * 0.015))
  );
  const reconsignmentRecovery = roundCurrency(
    claimedAmount * (((seed >> 3) % 4) * 0.03)
  );
  const recoveredAmount = roundCurrency(
    Math.min(claimedAmount, commodityRecovery + reconsignmentRecovery)
  );
  const outstandingExposure = roundCurrency(Math.max(0, claimedAmount - recoveredAmount));

  return {
    claimedAmount,
    recoveredAmount,
    outstandingExposure
  };
}

function getTicketMap(data) {
  const tickets = new Map();
  data.forEach((item) => {
    if (!tickets.has(item.ticketNumber)) {
      tickets.set(item.ticketNumber, item);
    }
  });
  return tickets;
}

function populateSelect(select, values) {
  select.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "All";
  allOption.textContent = "All";
  select.appendChild(allOption);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function initializeFilters() {
  populateSelect(filters.salesOwnerFilter, [...new Set(reportData.map((item) => item.salesOwner))].sort());
  populateSelect(filters.customerFilter, [...new Set(reportData.map((item) => item.customer))].sort());
  populateSelect(filters.warehouseFilter, [...new Set(reportData.map((item) => item.warehouse))].sort());
  populateSelect(filters.vendorFilter, [...new Set(reportData.map((item) => item.vendor))].sort());
  populateSelect(filters.commodityManagerFilter, [...new Set(reportData.map((item) => item.commodityManager))].sort());
  populateSelect(filters.statusFilter, [...new Set(reportData.map((item) => item.ticketStatus))].sort());
  populateSelect(filters.productFilter, [...new Set(reportData.map((item) => item.productDescription))].sort());
  populateSelect(filters.initialReasonFilter, [...new Set(reportData.map((item) => item.initialReason))].sort());
}

function matchesFilter(value, selected) {
  return selected === "All" || value === selected;
}

function sortData() {
  const { key, direction } = sortState;
  filteredData.sort((left, right) => {
    let leftValue = left[key];
    let rightValue = right[key];

    if (key === "poToShipDays") {
      leftValue = getPoToShipDays(left);
      rightValue = getPoToShipDays(right);
    }

    if (key === "daysOpen") {
      leftValue = getDaysOpen(left);
      rightValue = getDaysOpen(right);
    }

    if (key === "claimedAmount" || key === "recoveredAmount" || key === "outstandingExposure") {
      leftValue = getFinancialSnapshot(left)[key];
      rightValue = getFinancialSnapshot(right)[key];
    }

    if (typeof leftValue === "number") {
      return direction === "asc" ? leftValue - rightValue : rightValue - leftValue;
    }

    return direction === "asc"
      ? String(leftValue).localeCompare(String(rightValue))
      : String(rightValue).localeCompare(String(leftValue));
  });
}

function applyFilters() {
  const startDate = filters.startDate.value;
  const endDate = filters.endDate.value;

  filteredData = reportData.filter((item) => {
    const inDateRange =
      (!startDate || item.reportDate >= startDate) &&
      (!endDate || item.reportDate <= endDate);

    return (
      inDateRange &&
      matchesFilter(item.salesOwner, filters.salesOwnerFilter.value) &&
      matchesFilter(item.customer, filters.customerFilter.value) &&
      matchesFilter(item.warehouse, filters.warehouseFilter.value) &&
      matchesFilter(item.vendor, filters.vendorFilter.value) &&
      matchesFilter(item.commodityManager, filters.commodityManagerFilter.value) &&
      matchesFilter(item.ticketStatus, filters.statusFilter.value) &&
      matchesFilter(item.productDescription, filters.productFilter.value) &&
      matchesFilter(item.initialReason, filters.initialReasonFilter.value)
    );
  });

  sortData();
  currentPage = 1;
  render();
}

function clearFilters() {
  filters.startDate.value = "2026-05-01";
  filters.endDate.value = TODAY;
  Object.values(filters).forEach((control) => {
    if (control.tagName === "SELECT") {
      control.value = "All";
    }
  });
  applyFilters();
}

function summarizeCounts(data, key, limit = 5) {
  const counts = data.reduce((map, item) => {
    map.set(item[key], (map.get(item[key]) || 0) + 1);
    return map;
  }, new Map());

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit);
}

function renderRankList(target, rows, label = "claims") {
  if (rows.length === 0) {
    target.innerHTML = `<div class="empty-state">No data available.</div>`;
    return;
  }

  const max = rows[0][1];
  target.innerHTML = rows
    .map(
      ([name, count]) => `
        <div class="rank-row">
          <div class="rank-meta">
            <span class="rank-name">${name}</span>
            <span class="rank-value">${count} ${label}</span>
          </div>
          <div class="rank-bar">
            <span style="width:${(count / max) * 100}%"></span>
          </div>
        </div>
      `
    )
    .join("");
}

function renderMiniTable(target, rows, firstHeader, secondHeader) {
  if (rows.length === 0) {
    target.innerHTML = `<div class="empty-state">No data available.</div>`;
    return;
  }

  target.innerHTML = `
    <table class="summary-mini-table">
      <thead>
        <tr>
          <th>${firstHeader}</th>
          <th>${secondHeader}</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td>${label}</td>
                <td>${value}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
    <a class="summary-link" href="#">View All</a>
  `;
}

function renderWeeklyTrend(data) {
  if (data.length === 0) {
    insightTargets.weeklyTrend.innerHTML = `<div class="empty-state">No data available.</div>`;
    return;
  }

  const buckets = data.reduce((map, item) => {
    const key = item.reportDate;
    map.set(key, (map.get(key) || 0) + 1);
    return map;
  }, new Map());

  const rows = [...buckets.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  const max = Math.max(...rows.map((row) => row[1]), 1);
  const width = 760;
  const height = 232;
  const margin = { top: 30, right: 24, bottom: 54, left: 44 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const stepX = rows.length > 1 ? plotWidth / (rows.length - 1) : 0;

  const points = rows.map(([week, count], index) => {
    const x = margin.left + stepX * index;
    const y = margin.top + plotHeight - (count / max) * plotHeight;
    return { week, count, x, y };
  });

  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const areaPath = `${path} L ${points[points.length - 1].x} ${margin.top + plotHeight} L ${points[0].x} ${margin.top + plotHeight} Z`;
  const tickCount = 4;
  const yTicks = Array.from({ length: tickCount + 1 }, (_, index) => Math.round((max / tickCount) * index));
  const peak = rows.reduce((best, row) => (row[1] > best[1] ? row : best), rows[0]);
  const totalClaims = rows.reduce((sum, [, count]) => sum + count, 0);
  const xLabels = points.map((point, index) => {
    const show = points.length <= 8 || index === 0 || index === points.length - 1 || index % 2 === 0;
    return show
      ? `<text class="line-x-label" x="${point.x}" y="${height - 14}">${formatDate(point.week).slice(0, 5)}</text>`
      : "";
  });

  insightTargets.weeklyTrend.innerHTML = `
    <div class="trend-head">
      <div>
        <div class="trend-kicker">Selected Date Range</div>
        <div class="trend-stat">${totalClaims} total claims</div>
      </div>
      <div class="trend-badge">Peak: ${formatDate(peak[0])} (${peak[1]})</div>
    </div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Claims Trend By Selected Date Range">
      <defs>
        <linearGradient id="trendAreaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7ab62f" stop-opacity="0.28"></stop>
          <stop offset="100%" stop-color="#7ab62f" stop-opacity="0.03"></stop>
        </linearGradient>
      </defs>
      ${yTicks
        .map((tick) => {
          const y = margin.top + plotHeight - (tick / max) * plotHeight;
          return `
            <line class="line-grid" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
            <text class="line-y-label" x="${margin.left - 10}" y="${y + 4}">${tick}</text>
          `;
        })
        .join("")}
      <line class="line-axis" x1="${margin.left}" y1="${margin.top + plotHeight}" x2="${width - margin.right}" y2="${margin.top + plotHeight}"></line>
      <path class="line-area" d="${areaPath}"></path>
      <path class="line-series" d="${path}"></path>
      ${points
        .map(
          (point) => `
            <circle class="line-point-halo" cx="${point.x}" cy="${point.y}" r="9"></circle>
            <circle class="line-point" cx="${point.x}" cy="${point.y}" r="4.5"></circle>
            <text class="line-point-label" x="${point.x}" y="${point.y - 14}">${point.count}</text>
          `
        )
        .join("")}
      ${xLabels.join("")}
    </svg>
  `;
}

function renderAgingBuckets(ticketRows) {
  const counts = {
    "0-7 Days": 0,
    "8-14 Days": 0,
    "15-30 Days": 0,
    "30 Days+": 0
  };

  ticketRows.forEach((item) => {
    const days = getDaysOpen(item);
    if (days <= 7) {
      counts["0-7 Days"] += 1;
    } else if (days <= 14) {
      counts["8-14 Days"] += 1;
    } else if (days <= 30) {
      counts["15-30 Days"] += 1;
    } else {
      counts["30 Days+"] += 1;
    }
  });

  renderRankList(
    insightTargets.agingBucket,
    Object.entries(counts),
    "tickets"
  );
}

function renderDonutChart(chartTarget, legendTarget, rows, centerValue, centerLabel) {
  if (rows.length === 0) {
    chartTarget.innerHTML = `<div class="empty-state">No data available.</div>`;
    legendTarget.innerHTML = "";
    chartTarget.style.background = "none";
    return;
  }

  const total = rows.reduce((sum, [, count]) => sum + count, 0);
  let start = 0;
  const segments = rows.map(([label, count], index) => {
    const percentage = total === 0 ? 0 : (count / total) * 100;
    const color = chartPalette[index % chartPalette.length];
    const segment = {
      label,
      count,
      percentage,
      color,
      start,
      end: start + percentage
    };
    start += percentage;
    return segment;
  });

  chartTarget.style.background = `conic-gradient(${segments
    .map((segment) => `${segment.color} ${segment.start}% ${segment.end}%`)
    .join(", ")})`;
  chartTarget.innerHTML = `
    <div class="donut-center">
      <strong>${centerValue}</strong>
      <span>${centerLabel}</span>
    </div>
  `;

  legendTarget.innerHTML = segments
    .map(
      (segment) => `
        <div class="legend-row">
          <span class="legend-swatch" style="background:${segment.color}"></span>
          <span class="legend-label">${segment.label}</span>
          <span class="legend-value">${Math.round(segment.percentage)}% (${segment.count})</span>
        </div>
      `
    )
    .join("");
}

function updateMetrics() {
  const tickets = [...getTicketMap(filteredData).values()];
  const openTickets = tickets.filter((item) => item.ticketStatus !== "Closed");
  const avgDaysOpen =
    tickets.length === 0
      ? 0
      : tickets.reduce((sum, item) => sum + getDaysOpen(item), 0) / tickets.length;
  const avgPoToShip =
    filteredData.length === 0
      ? 0
      : filteredData.reduce((sum, item) => sum + getPoToShipDays(item), 0) / filteredData.length;

  metricFields.totalTicketsMetric.textContent = tickets.length;
  metricFields.totalLineItemsMetric.textContent = filteredData.length;
  metricFields.openTicketsMetric.textContent = openTickets.length;
  metricFields.avgDaysOpenMetric.textContent = avgDaysOpen.toFixed(1);
  metricFields.avgPoToShipMetric.textContent = avgPoToShip.toFixed(1);
  metricFields.salesOwnersMetric.textContent = new Set(filteredData.map((item) => item.salesOwner)).size;
  metricFields.vendorsMetric.textContent = new Set(filteredData.map((item) => item.vendor)).size;

  const totalClaimedAmount = filteredData.reduce(
    (sum, item) => sum + getFinancialSnapshot(item).claimedAmount,
    0
  );
  const totalRecoveredAmount = filteredData.reduce(
    (sum, item) => sum + getFinancialSnapshot(item).recoveredAmount,
    0
  );
  const outstandingExposure = filteredData.reduce(
    (sum, item) => sum + getFinancialSnapshot(item).outstandingExposure,
    0
  );
  const avgClaimValuePerTicket = tickets.length === 0 ? 0 : totalClaimedAmount / tickets.length;
  const recoveryRate = totalClaimedAmount === 0 ? 0 : (totalRecoveredAmount / totalClaimedAmount) * 100;
  const quantityCasesAffected = filteredData.reduce((sum, item) => sum + item.qty, 0);

  metricFields.totalClaimedAmountMetric.textContent = formatCurrency(totalClaimedAmount);
  metricFields.totalRecoveredAmountMetric.textContent = formatCurrency(totalRecoveredAmount);
  metricFields.outstandingExposureMetric.textContent = formatCurrency(outstandingExposure);
  metricFields.avgClaimValuePerTicketMetric.textContent = formatCurrency(avgClaimValuePerTicket);
  metricFields.recoveryRateMetric.textContent = formatPercentage(recoveryRate);
  metricFields.quantityCasesAffectedMetric.textContent = formatWholeNumber(quantityCasesAffected);
}

function updateInsights() {
  const tickets = [...getTicketMap(filteredData).values()];
  renderMiniTable(insightTargets.warehouse, summarizeCounts(filteredData, "warehouse"), "Warehouse", "Tickets");
  renderMiniTable(insightTargets.vendor, summarizeCounts(filteredData, "vendor"), "Vendor", "Tickets");
  renderMiniTable(insightTargets.customer, summarizeCounts(filteredData, "customer"), "Customer", "Tickets");
  renderMiniTable(
    insightTargets.productDescription,
    summarizeCounts(filteredData, "productDescription"),
    "Product Description",
    "Line Items"
  );
  renderRankList(insightTargets.initialReason, summarizeCounts(filteredData, "initialReason", 6));
  renderWeeklyTrend(filteredData);
  renderAgingBuckets(tickets);
}

function renderTable() {
  tableBody.innerHTML = "";

  if (filteredData.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="17">No flagged ticket line items match the selected filters.</td></tr>`;
    tableSummary.textContent = "0 flagged line items";
    paginationSummary.textContent = "Showing 0 to 0 of 0 line items";
    paginationButtons.innerHTML = "";
    return;
  }

  const start = (currentPage - 1) * rowsPerPage;
  const pageRows = filteredData.slice(start, start + rowsPerPage);
  const end = start + pageRows.length;

  pageRows.forEach((item) => {
    const financials = getFinancialSnapshot(item);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.salesOwner}</td>
      <td>${item.ticketNumber}</td>
      <td>${formatDate(item.reportDate)}</td>
      <td>${item.customer}</td>
      <td>${formatDate(item.shipDate)}</td>
      <td>${formatDate(item.arrivalDate)}</td>
      <td>${item.warehouse}</td>
      <td>${item.qty}</td>
      <td>${item.productDescription}</td>
      <td>${item.vendor}</td>
      <td>${item.commodityManager}</td>
      <td>${getPoToShipDays(item)}</td>
      <td>${formatCurrency(financials.claimedAmount)}</td>
      <td>${formatCurrency(financials.recoveredAmount)}</td>
      <td>${formatCurrency(financials.outstandingExposure)}</td>
      <td>${item.ticketStatus}</td>
      <td>${getDaysOpen(item)}</td>
    `;
    tableBody.appendChild(row);
  });

  tableSummary.textContent = `${filteredData.length} flagged line items`;
  paginationSummary.textContent = `Showing ${start + 1} to ${end} of ${filteredData.length} line items`;
}

function renderPagination() {
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  if (totalPages === 0) {
    paginationButtons.innerHTML = "";
    return;
  }

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const pageLabels = [
    { label: "«", page: 1 },
    { label: "‹", page: Math.max(1, currentPage - 1) },
    ...Array.from({ length: totalPages }, (_, index) => ({
      label: String(index + 1),
      page: index + 1
    })),
    { label: "›", page: Math.min(totalPages, currentPage + 1) },
    { label: "»", page: totalPages }
  ];

  paginationButtons.innerHTML = "";
  pageLabels.forEach((item) => {
    const button = document.createElement("button");
    button.className = "page-button";
    if (item.page === currentPage && /^\d+$/.test(item.label)) {
      button.classList.add("active");
    }
    button.textContent = item.label;
    button.addEventListener("click", () => {
      currentPage = item.page;
      renderTable();
      renderPagination();
    });
    paginationButtons.appendChild(button);
  });
}

function downloadFile(name, type, content) {
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = name;
  link.click();
  URL.revokeObjectURL(link.href);
}

function exportRows(format) {
  const headers = [
    "Sales Owner",
    "Ticket #",
    "Report Date",
    "Customer",
    "Ship Date",
    "Arrival Date",
    "Warehouse",
    "Qty",
    "Product Description",
    "Vendor",
    "Commodity Manager",
    "PO-to-Ship Days",
    "Claimed Amount",
    "Recovered Amount",
    "Outstanding Exposure",
    "Ticket Status",
    "Days Open",
    "Initial Reason"
  ];

  const rows = filteredData.map((item) => [
    item.salesOwner,
    item.ticketNumber,
    formatDate(item.reportDate),
    item.customer,
    formatDate(item.shipDate),
    formatDate(item.arrivalDate),
    item.warehouse,
    item.qty,
    item.productDescription,
    item.vendor,
    item.commodityManager,
    getPoToShipDays(item),
    formatCurrency(getFinancialSnapshot(item).claimedAmount),
    formatCurrency(getFinancialSnapshot(item).recoveredAmount),
    formatCurrency(getFinancialSnapshot(item).outstandingExposure),
    item.ticketStatus,
    getDaysOpen(item),
    item.initialReason
  ]);

  if (format === "csv") {
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
      .join("\n");
    downloadFile("claims-intake-audit-report.csv", "text/csv;charset=utf-8;", csv);
    return;
  }

  const tableMarkup = `
    <table>
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;

  downloadFile("claims-intake-audit-report.xls", "application/vnd.ms-excel", tableMarkup);
}

function attachEvents() {
  document.getElementById("applyFilters").addEventListener("click", applyFilters);
  document.getElementById("clearFilters").addEventListener("click", clearFilters);

  rowsPerPageSelect.addEventListener("change", (event) => {
    rowsPerPage = Number(event.target.value);
    currentPage = 1;
    render();
  });

  document.querySelectorAll(".table-panel thead th").forEach((header) => {
    header.addEventListener("click", () => {
      const nextKey = header.dataset.sort;
      if (sortState.key === nextKey) {
        sortState.direction = sortState.direction === "asc" ? "desc" : "asc";
      } else {
        sortState = { key: nextKey, direction: "asc" };
      }
      sortData();
      currentPage = 1;
      render();
    });
  });

  document.getElementById("exportCsv").addEventListener("click", () => exportRows("csv"));
  document.getElementById("exportExcel").addEventListener("click", () => exportRows("excel"));
}

function render() {
  updateMetrics();
  updateInsights();
  renderTable();
  renderPagination();
}

initializeFilters();
attachEvents();
clearFilters();
