const isRecord = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

export const getEmployeeFromAuthPayload = (payload) => {
  const queue = [payload];
  const visited = new Set();

  while (queue.length > 0) {
    const candidate = queue.shift();

    if (!isRecord(candidate) || visited.has(candidate)) {
      continue;
    }
    visited.add(candidate);

    if (typeof candidate.role === 'string' || isRecord(candidate.role)) {
      return candidate;
    }

    for (const key of ['employee', 'user', 'data', 'result']) {
      if (isRecord(candidate[key])) {
        queue.push(candidate[key]);
      }
    }
  }

  return null;
};

export const getEmployeeRole = (employee) => {
  const role = employee?.role;
  const roleName = typeof role === 'string' ? role : role?.name;

  return typeof roleName === 'string' ? roleName.trim().toLowerCase() : '';
};
