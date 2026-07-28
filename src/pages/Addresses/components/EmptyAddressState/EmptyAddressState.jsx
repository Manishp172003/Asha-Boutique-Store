import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './EmptyAddressState.css';

const EmptyAddressState = () => {
  return (
    <div className="empty-address-state">
      <div className="empty-address-state__icon">
        <MapPin size={64} color="#C77057" />
      </div>
      <h2 className="empty-address-state__title">No Saved Addresses</h2>
      <p className="empty-address-state__subtitle">Add your first delivery address.</p>
    </div>
  );
};

export default EmptyAddressState;
