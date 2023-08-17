import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Todoloading.css'

function TodoLoading({lists}) {
  return (
    Array(lists).fill(0).map((_, i) => (
        <div className="loadingTodo-list">
          <div className="loadingTodo-container" key={i}>
            <Skeleton
              borderRadius={16}
              width={333.797}
              height={50}
              style={{ paddingRight: '8px' }}
            />
          </div>
          <div className="loadingTodo-check">
            <Skeleton circle height={24} width={24} direction="rtl" style={{margin: '0px 10px'}}/>
          </div>
        </div>
      ))
  );
}

export { TodoLoading };
