import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'processing':
        return 'processing';
      case 'shipped':
        return 'shipped';
      case 'delivered':
        return 'delivered';
      case 'cancelled':
        return 'cancelled';
      default:
        return 'processing';
    }
  };

  const statusClass = getStatusClass(status);

  return (
    <span className={`status-badge ${statusClass}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
