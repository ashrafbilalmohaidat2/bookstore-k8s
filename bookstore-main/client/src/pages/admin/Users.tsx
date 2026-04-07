import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ban, Trash2 } from "lucide-react";
import { useGetAllUsersQuery, useDeleteUserMutation, useUpdateUserMutation } from "@/services/user.service";

const AdminUsersPage = () => {
  const { data, isLoading, isError, error, refetch } = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const pageSize = 8;

  const users = data?.users ?? [];

  const filteredUsers = users.filter((user) =>
    (user.fullName || "")
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    (user.email || "").toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (direction: "next" | "prev") => {
    setCurrentPage((prev) => {
      if (direction === "next" && prev < totalPages) return prev + 1;
      if (direction === "prev" && prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleDeleteUser = async (userId: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        await deleteUser(userId).unwrap();
        alert("User deleted successfully");
        refetch();
      } catch (err) {
        alert("Failed to delete user");
        console.error(err);
      }
    }
  };

  const handlePromote = async (userId: string, currentRole: string) => {
    const newRole = currentRole === "admin" ? "user" : "admin";
    const action = currentRole === "admin" ? "Demote" : "Promote";
    
    if (window.confirm(`${action} this user to ${newRole}?`)) {
      try {
        setEditingUserId(userId);
        await updateUser({ userId, role: newRole as "user" | "admin" }).unwrap();
        alert(`User ${action.toLowerCase()}d successfully`);
        refetch();
        setEditingUserId(null);
      } catch (err) {
        alert(`Failed to ${action.toLowerCase()} user`);
        console.error(err);
        setEditingUserId(null);
      }
    }
  };

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (isError) {
    return (
      <div className="text-red-600">
        Error: {error && "message" in error ? (error as any).message : "Unable to load users"}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Users</h2>
        <Input
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-64"
        />
      </div>

      <div className="rounded-none border bg-white shadow-sm overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedUsers.map((user, index) => (
              <TableRow key={user._id || index}>
                <TableCell className={`text-xs font-medium px-2 py-1 rounded ${
                      user.role === "admin"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                  {index + 1}
                </TableCell>
                <TableCell>{user.fullName || "—"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      user.role === "admin"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {user.role || "user"}
                  </span>
                </TableCell>
                <TableCell>{new Date(user.createdAt || "").toLocaleDateString() || "—"}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handlePromote(user._id, user.role)}
                    disabled={editingUserId === user._id}
                  >
                    <Ban className="w-4 h-4 mr-1" />
                    {user.role === "admin" ? "Demote" : "Promote"}
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDeleteUser(user._id, user.fullName || user.email)}
                    disabled={editingUserId === user._id}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          Showing {paginatedUsers.length} of {filteredUsers.length} users
        </span>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
            Previous
          </Button>
          <Button variant="outline" onClick={() => handlePageChange("next")} disabled={currentPage === totalPages}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersPage;
