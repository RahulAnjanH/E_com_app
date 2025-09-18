import React, { useEffect, useState } from 'react'; // Corrected import
import { toast } from 'react-toastify';
import CustomerService from '../services/CustomerService';

function CustomerList() {
    const [customers, setCustomers] = useState([]);

    const fetchCustomers = () => {
        CustomerService.getAll()
            .then((data) => setCustomers(data))
            .catch(() => toast.error("Error fetching customers")); // Fixed syntax
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const handleDelete = (id) => {
        if (!id) return;
        CustomerService.remove(id)
            .then((res) => {
                if (res.ok) {
                    toast.success("Customer deleted successfully");
                    fetchCustomers(); // Refresh list
                } else {
                    toast.error('Failed to delete customer'); // Fixed typo
                }
            })
            .catch(() => {
                toast.error("Error deleting customer"); // Fixed syntax
            });
    };

    return (
        <div className="card shadow p-4">
            <h3 className="mb-4 text-primary">Customer List</h3>
            {customers.length === 0 ? (
                <div className="alert alert-info">No customers found</div>
            ) : (
                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((c, index) => (
                            <tr key={c.id}>
                                <td>{index + 1}</td>
                                <td>{c.name}</td>
                                <td>{c.email}</td>
                                <td>{c.phone}</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(c.id)}
                                    >
                                        <i className="bi bi-trash"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default CustomerList;