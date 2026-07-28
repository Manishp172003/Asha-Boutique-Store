import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AddAddressModal from '../AddAddressModal/AddAddressModal';
import './AddressHeader.css';

const AddressHeader = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="address-header">
        <div>
          <h1 className="address-header__title">My Addresses</h1>
          <p className="address-header__subtitle">Manage your delivery addresses</p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowAddModal(true)}
        >
          <Plus size={18} />
          Add Address
        </Button>
      </div>

      {showAddModal && (
        <AddAddressModal
          open={showAddModal}
          onOpenChange={setShowAddModal}
        />
      )}
    </>
  );
};

export default AddressHeader;
