const jobData = [
  {
    id: 1,
    title: "Plumbing Repair",
    status: "Completed",
    rating: 4.5,
    price: 15000,
    feedback: "Great service, very professional!",
    awaitingEscrow: false,
    approved: true,
  },
  {
    id: 2,
    title: "House Painting",
    status: "In Progress",
    price: 40000,
    awaitingEscrow: true, // Waiting for customer to fund escrow
    approved: false,
  },
  {
    id: 3,
    title: "AC Installation",
    status: "Pending",
    price: 20000,
    awaitingEscrow: false,
    approved: false,
  },
];

export default jobData;
