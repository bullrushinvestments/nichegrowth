import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  content: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [test, setTest] = useState<Test>({
    id: 0,
    title: '',
    description: '',
    content: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const fetchTestById = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`/api/tests/${router.query.id}`);
          setTest(response.data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      if (typeof router.query.id === 'string') {
        fetchTestById();
      }
    }
  }, [router.isReady, router.query.id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTest({ ...test, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put(`/api/tests/${router.query.id}`, test);
      router.push('/tests');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {loading && <p>Loading...</p>}
      {error && <p role="alert" aria-live="assertive">{`Error: ${error}`}</p>}
      {!loading && !error && (
        <>
          <h1 className="text-xl font-bold mb-2">Edit Test</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={test.title}
                onChange={handleInputChange}
                required
                aria-required="true"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={test.description}
                onChange={handleInputChange}
                required
                aria-required="true"
                rows={4}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={test.content}
                onChange={handleInputChange}
                required
                aria-required="true"
                rows={10}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Save
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default WriteTests;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  content: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [test, setTest] = useState<Test>({
    id: 0,
    title: '',
    description: '',
    content: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const fetchTestById = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`/api/tests/${router.query.id}`);
          setTest(response.data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      if (typeof router.query.id === 'string') {
        fetchTestById();
      }
    }
  }, [router.isReady, router.query.id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTest({ ...test, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put(`/api/tests/${router.query.id}`, test);
      router.push('/tests');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {loading && <p>Loading...</p>}
      {error && <p role="alert" aria-live="assertive">{`Error: ${error}`}</p>}
      {!loading && !error && (
        <>
          <h1 className="text-xl font-bold mb-2">Edit Test</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={test.title}
                onChange={handleInputChange}
                required
                aria-required="true"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={test.description}
                onChange={handleInputChange}
                required
                aria-required="true"
                rows={4}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={test.content}
                onChange={handleInputChange}
                required
                aria-required="true"
                rows={10}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Save
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default WriteTests;