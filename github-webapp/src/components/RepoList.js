import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/App.css'

const RepoList = () => {
  const [repos, setRepos] = useState([]);

  // Fetch repository data
  useEffect(() => {
    axios
      .get('https://api.github.com/users/karlasebandal/repos')
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 class="text-left text-2xl font-semibold">My Repositories</h1>
            <hr/>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {repos.map(repo => (
                    <div key={repo.id} class="basis-1/3">
                        <div class="flex items-center gap-x-4 text-xs">
                          <p class="text-sm text-slate-400 text-left py-3">{repo.created_at}</p>
                          <a href="#" class="relative z-10 rounded-full bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{repo.visibility}</a>
                        </div>
                          <p class="text-md text-slate-500 text-left font-bold py-2">{repo.name}</p>
                          <p class="text-sm text-slate-400 text-left py-2">{repo.description}</p>
                        
                        <div class="flex items-center relative">
                            <img src={repo.owner.avatar_url} alt="Repo Owner" class="h-12 w-12 rounded-full bg-slate-200"/>  
                            <div class="col">
                                <p class="text-sm font-bold text-slate-500 text-left">{repo.owner.login}</p>
                                <p class="text-sm text-slate-400 text-left"><a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default RepoList;