const report = (date, high=20, low=0, pendingPercent=0.4, failingPercent=0.2) => {
  const quantity_sent = Math.round(Math.random() * (high - low) + low)
  const quantity_pending = Math.round(quantity_sent * Math.random() * pendingPercent)
  const quantity_failed = Math.round(quantity_sent * Math.random() * failingPercent)
  return {
    quantity_sent,
    quantity_pending,
    quantity_failed,
    date: '2020-11-14',
    date: `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`,
  }
}

function generateNormalReports (days=61) {
  const reports = []
  const date = new Date()
  for (let i=0; i < days; i++) {
    reports.push(report(date))
    date.setDate(date.getDate() + 1)
  }
  return reports
}

function generateTrendingUpReports (days=61) {
  const reports = []
  const date = new Date()
  for (let i=0; i < days; i++) {
    reports.push(report(date, 20 + (Math.random() * i * 4) + i * 2))
    date.setDate(date.getDate() + 1)
  }
  return reports
}

function generateTrendingDownReports (days=61) {
  const reports = []
  const date = new Date()
  for (let i=0; i < days; i++) {
    reports.push(report(date, Math.max(0, 100 - (Math.random() * i * 3) - i)))
    date.setDate(date.getDate() + 1)
  }
  return reports
}

function generateFailingReports (days=61) {
  const reports = []
  const date = new Date()
  for (let i=0; i < days; i++) {
    reports.push(report(date, 20, 0, 0.4, 0.9))
    date.setDate(date.getDate() + 1)
  }
  return reports
}

// TODO: Generate trending reports.
// TODO: Generate failing reports.

// [
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-14" }w },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-15" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-16" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-17" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-18" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-19" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-20" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-21" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-22" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-23" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-24" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-25" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-26" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-27" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-28" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-29" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-11-30" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-01" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-02" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-03" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-04" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-05" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-06" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-07" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-08" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-09" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-10" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-11" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-12" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-13" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-14" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-15" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-16" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-17" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-18" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-19" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-20" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-21" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-22" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-23" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-24" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-25" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-26" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-27" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-28" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-29" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-30" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2020-12-31" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-01" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-02" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-03" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-04" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-05" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-06" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-07" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-08" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-09" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-10" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-11" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-12" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-13" } },
//   { "report": { "quantity_failed": 0, "quantity_pending": 0, "quantity_sent": 0, "date":"2021-01-14" } },
// ]

export {
  generateNormalReports,
  generateTrendingUpReports,
  generateTrendingDownReports,
  generateFailingReports,
}
