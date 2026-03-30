import React, { useState, useEffect } from 'react';
import { FaTimes, FaDownload, FaTrash, FaEye, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SubmissionsDashboard = ({ onClose }) => {
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [error, setError] = useState('');

  const ADMIN_PASSWORD = 'phildev2024';

  const loadSubmissions = () => {
    const saved = localStorage.getItem('contactSubmissions');
    if (saved) {
      const parsed = JSON.parse(saved);
      setSubmissions(parsed);
      setFilteredSubmissions(parsed);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      loadSubmissions();
      setError('');
    } else {
      setError('Incorrect password. Access denied.');
    }
  };

  useEffect(() => {
    let result = [...submissions];
    if (searchTerm) {
      result = result.filter(sub => 
        (sub.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.message || '').toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    result.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setFilteredSubmissions(result);
    setCurrentPage(1);
  }, [submissions, searchTerm]);

  const clearSubmissions = () => {
    if (window.confirm('Delete ALL submissions? This cannot be undone.')) {
      localStorage.removeItem('contactSubmissions');
      setSubmissions([]);
      setFilteredSubmissions([]);
    }
  };

  const downloadCSV = () => {
    const headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Project Type', 'Budget', 'Message', 'User Location'];
    const rows = filteredSubmissions.map(s => [
      s.timestamp || '',
      s.name || '',
      s.email || '',
      s.phone || '',
      s.projectType || '',
      s.budget || '',
      s.message || '',
      s.userLocation || ''
    ]);
    const csvContent = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `submissions_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const deleteSubmission = (index) => {
    if (window.confirm('Delete this submission?')) {
      const newSubmissions = [...submissions];
      newSubmissions.splice(index, 1);
      localStorage.setItem('contactSubmissions', JSON.stringify(newSubmissions));
      setSubmissions(newSubmissions);
    }
  };

  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const paginatedSubmissions = filteredSubmissions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (!authenticated) {
    return (
      <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center">
        <div className="bg-black border border-white/10 rounded-2xl p-8 w-96">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-amber-400">Admin Access</h2>
              <p className="text-white/40 text-xs">Protected Dashboard</p>
            </div>
            <button onClick={onClose} className="text-white/60 hover:text-white">
              <FaTimes size={20} />
            </button>
          </div>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center border-2 border-amber-500/50">
              <FaEye className="text-amber-400 text-3xl" />
            </div>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 mb-4 text-white placeholder-white/30 focus:outline-none focus:border-amber-500"
              autoFocus
            />
            {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
            <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 overflow-auto">
      <div className="container mx-auto p-6 max-w-7xl">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-amber-400">Contact Submissions</h2>
            <p className="text-white/40 text-sm">Total: {filteredSubmissions.length} submissions</p>
          </div>
          <div className="flex gap-3">
            <button onClick={downloadCSV} className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-400 hover:bg-emerald-500/30 transition">
              <FaDownload /> Export CSV
            </button>
            <button onClick={clearSubmissions} className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 hover:bg-red-500/30 transition">
              <FaTrash /> Clear All
            </button>
            <button onClick={onClose} className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition">
              Close
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-amber-400">{submissions.length}</div>
            <div className="text-xs text-white/40">Total</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400">
              {submissions.filter(s => new Date(s.timestamp) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
            </div>
            <div className="text-xs text-white/40">Last 7 Days</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">
              {submissions.filter(s => s.projectType).length}
            </div>
            <div className="text-xs text-white/40">With Project</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {submissions.filter(s => s.budget).length}
            </div>
            <div className="text-xs text-white/40">With Budget</div>
          </div>
        </div>
        
        <div className="relative mb-6">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search by name, email, or message..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-500"
          />
        </div>
        
        {filteredSubmissions.length === 0 ? (
          <div className="text-center py-20 text-white/40">
            <FaEye className="text-5xl mx-auto mb-4 opacity-50" />
            <p>No submissions yet.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Project</th>
                    <th className="p-3 text-left">Message</th>
                    <th className="p-3 text-left">Location</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedSubmissions.map((sub, idx) => (
                    <tr key={idx} className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-3 text-white/60 text-xs">{new Date(sub.timestamp).toLocaleDateString()}</td>
                      <td className="p-3 font-medium text-white/80">{sub.name || '-'}</td>
                      <td className="p-3 text-white/60">{sub.email || '-'}</td>
                      <td className="p-3 text-white/60">{sub.projectType || '-'}</td>
                      <td className="p-3 text-white/50 max-w-[200px] truncate">{sub.message?.substring(0, 50) || '-'}</td>
                      <td className="p-3 text-white/40 text-xs">{sub.userLocation || '-'}</td>
                      <td className="p-3 text-center">
                        <button onClick={() => setSelectedSubmission(sub)} className="p-1.5 bg-white/5 rounded-lg hover:bg-emerald-500/20 transition mr-2">
                          <FaEye className="text-emerald-400 text-xs" />
                        </button>
                        <button onClick={() => { const index = submissions.findIndex(s => s.timestamp === sub.timestamp); if (index !== -1) deleteSubmission(index); }} className="p-1.5 bg-white/5 rounded-lg hover:bg-red-500/20 transition">
                          <FaTrash className="text-red-400 text-xs" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 disabled:opacity-30">
                  <FaChevronLeft />
                </button>
                <span className="text-white/60 text-sm">Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 disabled:opacity-30">
                  <FaChevronRight />
                </button>
              </div>
            )}
          </>
        )}
      </div>
      
      {selectedSubmission && (
        <div className="fixed inset-0 z-[250] bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedSubmission(null)}>
          <div className="bg-black border border-white/10 rounded-2xl p-6 max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-amber-400">Details</h3>
              <button onClick={() => setSelectedSubmission(null)} className="text-white/60 hover:text-white"><FaTimes /></button>
            </div>
            <div className="space-y-3">
              <div><span className="text-white/40 text-xs">Name:</span> <p className="text-white">{selectedSubmission.name}</p></div>
              <div><span className="text-white/40 text-xs">Email:</span> <p className="text-white">{selectedSubmission.email}</p></div>
              {selectedSubmission.phone && <div><span className="text-white/40 text-xs">Phone:</span> <p className="text-white">{selectedSubmission.phone}</p></div>}
              {selectedSubmission.projectType && <div><span className="text-white/40 text-xs">Project:</span> <p className="text-white">{selectedSubmission.projectType}</p></div>}
              {selectedSubmission.budget && <div><span className="text-white/40 text-xs">Budget:</span> <p className="text-white">{selectedSubmission.budget}</p></div>}
              <div><span className="text-white/40 text-xs">Message:</span> <p className="text-white/80 whitespace-pre-wrap">{selectedSubmission.message}</p></div>
              <div><span className="text-white/40 text-xs">Location:</span> <p className="text-white/60 text-sm">{selectedSubmission.userLocation || 'Unknown'}</p></div>
              <div><span className="text-white/40 text-xs">Received:</span> <p className="text-white/60 text-sm">{new Date(selectedSubmission.timestamp).toLocaleString()}</p></div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => window.location.href = `mailto:${selectedSubmission.email}`} className="flex-1 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-400 hover:bg-emerald-500/30 transition">Reply</button>
              <button onClick={() => setSelectedSubmission(null)} className="flex-1 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmissionsDashboard;