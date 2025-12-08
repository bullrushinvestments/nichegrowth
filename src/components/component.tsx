import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  contentTypes: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpec = async () => {
      try {
        const response = await axios.get('/api/business-specification');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpec();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <section
      id="business-specification"
      aria-labelledby="business-spec-title"
      className={clsx(
        'p-6',
        isTabletOrMobile ? 'bg-gray-50' : 'bg-white'
      )}
    >
      <h2 id="business-spec-title" className="text-xl font-bold mb-4">
        Business Specification
      </h2>
      <div className="flex flex-col gap-4">
        <p>{businessSpec?.description}</p>
        <ul className="list-disc pl-5">
          {businessSpec?.contentTypes.map((type, index) => (
            <li key={index} aria-label={`Content type ${type}`}>
              {type}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  contentTypes: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpec = async () => {
      try {
        const response = await axios.get('/api/business-specification');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpec();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <section
      id="business-specification"
      aria-labelledby="business-spec-title"
      className={clsx(
        'p-6',
        isTabletOrMobile ? 'bg-gray-50' : 'bg-white'
      )}
    >
      <h2 id="business-spec-title" className="text-xl font-bold mb-4">
        Business Specification
      </h2>
      <div className="flex flex-col gap-4">
        <p>{businessSpec?.description}</p>
        <ul className="list-disc pl-5">
          {businessSpec?.contentTypes.map((type, index) => (
            <li key={index} aria-label={`Content type ${type}`}>
              {type}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;