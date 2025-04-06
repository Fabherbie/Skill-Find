import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button, Modal, Input, Select, message } from "antd";

// Custom Toolbar Component
const CustomToolbar = ({ date, onNavigate }) => {
  const goToBack = () => {
    onNavigate("PREV");
  };

  const goToNext = () => {
    onNavigate("NEXT");
  };

  const label = () => {
    return moment(date).format("MMMM YYYY");
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <Button onClick={goToBack} className="bg-green-600 rounded-lg text-white">
        Prev
      </Button>
      <span className="font-semibold text-xl">{label()}</span>
      <Button onClick={goToNext} className="bg-green-600 rounded-lg text-white">
        Next
      </Button>
    </div>
  );
};

const localizer = momentLocalizer(moment);

const ProviderCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "Plumbing Job - Lagos",
      start: new Date(2025, 3, 15, 10, 0),
      end: new Date(2025, 3, 15, 12, 0),
      status: "Pending",
    },
    {
      title: "Electrical Repair - Abuja",
      start: new Date(2025, 3, 16, 9, 0),
      end: new Date(2025, 3, 16, 11, 0),
      status: "In Progress",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: null,
    end: null,
    status: "Pending",
  });
  const [view, setView] = useState("day");
  const [currentDate, setCurrentDate] = useState(new Date());

  // Handle slot selection (for adding new events)
  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({ ...newEvent, start, end });
    setModalVisible(true);
  };

  // Handle event selection (for editing existing events)
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  // Handle adding a new event
  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      message.error("Please fill in all fields.");
      return;
    }
    setEvents([...events, newEvent]);
    setModalVisible(false);
  };

  // Handle status change of an event
  const handleStatusChange = (status) => {
    const updatedEvents = events.map((event) =>
      event === selectedEvent ? { ...event, status } : event
    );
    setEvents(updatedEvents);
    setModalVisible(false);
  };

  const handleNavigate = (action) => {
    let newDate = new Date(currentDate);
    if (action === "NEXT") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else if (action === "PREV") {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md">
      <h2 className="mb-4 font-bold text-blue-950 text-xl">Job Calendar</h2>

      {/* Custom Toolbar */}
      <CustomToolbar date={currentDate} onNavigate={handleNavigate} />

      {/* View Toggle */}
      <div className="mb-4">
        <Button onClick={() => setView("day")}>Day View</Button>
        <Button onClick={() => setView("week")}>Week View</Button>
        <Button onClick={() => setView("month")}>Month View</Button>
      </div>

      {/* Calendar Component */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
        views={["month", "week", "day"]}
        view={view}
        onView={(newView) => setView(newView)}
        defaultDate={currentDate}
      />

      {/* Modal for Adding or Editing Events */}
      <Modal
        title={selectedEvent ? "Edit Job Status" : "Add Job to Calendar"}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() =>
          selectedEvent ? handleStatusChange(newEvent.status) : handleAddEvent()
        }
      >
        {!selectedEvent ? (
          <>
            <Input
              placeholder="Job Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="mb-2"
            />
            <Select
              className="w-full"
              value={newEvent.status}
              onChange={(value) => setNewEvent({ ...newEvent, status: value })}
            >
              <Select.Option value="Pending">Pending</Select.Option>
              <Select.Option value="In Progress">In Progress</Select.Option>
              <Select.Option value="Completed">Completed</Select.Option>
            </Select>
          </>
        ) : (
          <>
            <p>
              <strong>Job Title:</strong> {selectedEvent.title}
            </p>
            <p>
              <strong>Current Status:</strong> {selectedEvent.status}
            </p>
            <Select
              className="w-full"
              value={selectedEvent.status}
              onChange={(value) => handleStatusChange(value)}
            >
              <Select.Option value="Pending">Pending</Select.Option>
              <Select.Option value="In Progress">In Progress</Select.Option>
              <Select.Option value="Completed">Completed</Select.Option>
            </Select>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ProviderCalendar;
