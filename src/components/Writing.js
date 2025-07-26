import React, { useState, useEffect } from 'react';

const BlogModal = ({ blog, isOpen, onClose }) => {
  if (!isOpen || !blog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors text-xl"
          >
            ✕
          </button>
          <h1 className="text-2xl font-bold pr-12 leading-tight">{blog.title}</h1>
          <div className="flex items-center gap-4 mt-3 text-orange-100">
            <div className="flex items-center gap-1">
              <span className="text-sm">👤</span>
              <span className="font-medium">{blog.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">📅</span>
              <span>{new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="prose prose-orange max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-base">
              {blog.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ blog, onReadMore, isCompact = false }) => (
  <div className="bg-white p-5 rounded-lg shadow-md mb-4 border border-orange-200 hover:shadow-lg transition-all duration-200 hover:border-orange-300">
    <h3 className="font-bold text-orange-900 text-lg mb-2 leading-tight line-clamp-2">{blog.title}</h3>
    <div className="flex items-center gap-2 mb-3">
      <span className="text-orange-600 text-sm">👤</span>
      <p className="text-sm text-orange-600 font-medium">{blog.name}</p>
      <span className="text-orange-300">•</span>
      <div className="flex items-center gap-1 text-xs text-orange-500">
        <span>📅</span>
        {new Date(blog.created_at).toLocaleDateString()}
      </div>
    </div>
    <p className="text-sm text-orange-800 mb-3 line-clamp-3 leading-relaxed">
      {blog.description}
    </p>
    <button
      onClick={() => onReadMore(blog)}
      className="flex items-center gap-1 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
    >
      <span className="text-sm">👁️</span>
      Read Full Blog
    </button>
  </div>
);

const BlogList = ({ blogs, onReadMore }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [authorFilter, setAuthorFilter] = useState('');
  const blogsPerPage = 6;


  const authors = [...new Set(blogs.map(blog => blog.name))].sort();

  const filteredBlogs = authorFilter
    ? blogs.filter(blog => blog.name === authorFilter)
    : blogs;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [authorFilter]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-orange-200 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-orange-900">
          📚 All Blogs ({filteredBlogs.length})
        </h2>


        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-orange-700">Filter by Author:</label>
          <select
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
            className="border border-orange-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-orange-500"
          >
            <option value="">All Authors</option>
            {authors.map(author => (
              <option key={author} value={author}>{author}</option>
            ))}
          </select>
        </div>
      </div>


      {currentBlogs.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-orange-500 text-lg">
            {authorFilter ? `No blogs found by ${authorFilter}` : 'No blogs yet. Be the first to write one!'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {currentBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} onReadMore={onReadMore} />
          ))}
        </div>
      )}


      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-6 border-t border-orange-200">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-1 rounded-lg border border-orange-300 text-orange-600 hover:bg-orange-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-sm">◀</span>
            Previous
          </button>

          <span className="px-4 py-1 text-sm text-orange-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-1 rounded-lg border border-orange-300 text-orange-600 hover:bg-orange-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <span className="text-sm">▶</span>
          </button>
        </div>
      )}
    </div>
  );
};

const BlogWriting = () => {
  const [formData, setFormData] = useState({ name: '', email: '', title: '', description: '' });
  const [blogs, setBlogs] = useState([]);
  const [errors, setErrors] = useState({});
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('write');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/`);
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const { name, email, title, description } = formData;
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email';
    }
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Content is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newBlog = await response.json();
        setBlogs([newBlog, ...blogs]);
        setFormData({ name: '', email: '', title: '', description: '' });
        setErrors({});
        alert('Blog published successfully!');
      } else {
        console.error('Error posting blog:', response.statusText);
        alert('Failed to publish blog');
      }
    } catch (error) {
      console.error('Error posting blog:', error);
      alert('Failed to publish blog');
    }
  };


  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-900 mb-4">Welcome To The World Of Words</h1>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto leading-relaxed">
            Share your thoughts and discover amazing content from other writers
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md border border-orange-200">
            <button
              onClick={() => setActiveTab('write')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'write'
                  ? 'bg-orange-600 text-white'
                  : 'text-orange-600 hover:bg-orange-50'
                }`}
            >
              ✍️ Write Blog
            </button>
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'browse'
                  ? 'bg-orange-600 text-white'
                  : 'text-orange-600 hover:bg-orange-50'
                }`}
            >
              📚 Browse Blogs
            </button>
          </div>
        </div>

        {activeTab === 'write' ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-lg border border-orange-200 h-fit">
              <h2 className="text-xl font-bold text-orange-900 mb-6 flex items-center">
                ✨ Features
              </h2>
              <ul className="text-sm text-orange-700 space-y-4 leading-relaxed">
                <li>• Easy writing interface</li>
                <li>• Real-time preview</li>
                <li>• Draft saving</li>
                <li>• SEO tools</li>
                <li>• Clean blog layout</li>
                <li>• Author filtering</li>
                <li>• Full-screen reading</li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-orange-200">
              <h2 className="text-2xl font-bold text-orange-900 mb-8">✍️ Write Your Blog</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-orange-800 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-4 border rounded-lg ${errors.name ? 'border-red-400 bg-red-50' : 'border-orange-300 hover:border-orange-400'}`}
                  />
                  {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-orange-800 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-4 border rounded-lg ${errors.email ? 'border-red-400 bg-red-50' : 'border-orange-300 hover:border-orange-400'}`}
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-orange-800 mb-2">Blog Title *</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Engaging title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full p-4 border rounded-lg ${errors.title ? 'border-red-400 bg-red-50' : 'border-orange-300 hover:border-orange-400'}`}
                  />
                  {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-orange-800 mb-2">Content *</label>
                  <textarea
                    name="description"
                    placeholder="Start writing your blog here..."
                    value={formData.description}
                    onChange={handleChange}
                    rows={8}
                    className={`w-full p-4 border rounded-lg resize-vertical ${errors.description ? 'border-red-400 bg-red-50' : 'border-orange-300 hover:border-orange-400'}`}
                  />
                  {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition-all font-semibold"
                >
                  🚀 Publish Blog
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-lg border border-orange-200 h-fit">
              <h2 className="text-xl font-bold text-orange-900 mb-6">📰 Recent Blogs ({blogs.slice(0, 5).length})</h2>
              <div className="max-h-96 overflow-y-auto pr-2">
                {blogs.slice(0, 5).length === 0 ? (
                  <p className="text-orange-500 text-sm text-center">No blogs yet. Be the first to write one!</p>
                ) : (
                  blogs.slice(0, 5).map(blog => <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} isCompact={true} />)
                )}
              </div>
              <button
                onClick={() => setActiveTab('browse')}
                className="w-full mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                View All Blogs →
              </button>
            </div>
          </div>
        ) : (
          <BlogList blogs={blogs} onReadMore={handleReadMore} />
        )}

        <BlogModal
          blog={selectedBlog}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default BlogWriting;