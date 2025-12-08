import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface IRequirement {
  title: string;
  description?: string;
  url?: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IGatherRequirementsForm>();

  const onSubmit = (data: IGatherRequirementsForm) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <div>
        <label htmlFor="title" className="sr-only">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter title of requirement"
          {...register('requirements.0.title', { required: true })}
          aria-label="Requirement Title"
          className="p-2 border rounded-md focus:border-blue-500"
        />
        {errors.requirements?.[0]?.title && <span role="alert">Title is required</span>}
      </div>
      
      <div>
        <label htmlFor="description" className="sr-only">Description</label>
        <textarea
          id="description"
          placeholder="Enter description of requirement"
          {...register('requirements.0.description')}
          aria-label="Requirement Description"
          className="p-2 border rounded-md focus:border-blue-500"
        />
      </div>

      <button type="submit" disabled={loading} className={`py-2 px-4 bg-blue-500 text-white rounded ${loading ? 'opacity-50' : ''}`}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </motion.form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface IRequirement {
  title: string;
  description?: string;
  url?: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IGatherRequirementsForm>();

  const onSubmit = (data: IGatherRequirementsForm) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <div>
        <label htmlFor="title" className="sr-only">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter title of requirement"
          {...register('requirements.0.title', { required: true })}
          aria-label="Requirement Title"
          className="p-2 border rounded-md focus:border-blue-500"
        />
        {errors.requirements?.[0]?.title && <span role="alert">Title is required</span>}
      </div>
      
      <div>
        <label htmlFor="description" className="sr-only">Description</label>
        <textarea
          id="description"
          placeholder="Enter description of requirement"
          {...register('requirements.0.description')}
          aria-label="Requirement Description"
          className="p-2 border rounded-md focus:border-blue-500"
        />
      </div>

      <button type="submit" disabled={loading} className={`py-2 px-4 bg-blue-500 text-white rounded ${loading ? 'opacity-50' : ''}`}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </motion.form>
  );
};

export default GatherRequirements;