let calendarEntries = [{
    month: "Aug",
    date: "24",
    day: "Fri",
    title: "FESC Annual Energy Conference",
    detail: "Grinter Hall, 4:00pm - 7:30pm",
  },
  {
    month: "Sep",
    date: "19",
    day: "Wed",
    title: "Renewable Energy Symposium",
    detail: "Grinter Hall, 2:00pm - 4:30pm",
  },
  {
    month: "Oct",
    date: "01",
    day: "Mon",
    title: "Graduate Research Proposals",
    detail: "Grinter Hall, 10:00am - 1:30pm",
  },
  {
    month: "Oct",
    date: "01",
    day: "Mon",
    title: "Undergraduate Research Presentations",
    detail: "Grinter Hall, 3:00pm - 5:00pm",
  },
  {
    month: "Nov",
    date: "6",
    day: "Tue",
    title: "Department Chairs Committee Meeting",
    detail: "Grinter Hall, 9:00am - 10:00am",
  }
]

document.addEventListener("DOMContentLoaded", function() {
  let calendarListings = new Vue({
    el: '#calendarListings',
    data: {
      entries: calendarEntries,
    }
  })
})
