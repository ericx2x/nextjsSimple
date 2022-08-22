// there are a lot of types and interfaces in this file that don't make sense to be

export interface Phone {
    id: number;
    personId: number;
    person?: string;
    number?: string;
    type?: string;
    isPrimary?: boolean;
    allowSms?: boolean;
}

export interface Email {
    id: number;
    personId: number;
    person: string;
    address?: string;
    type?: string;
    isPrimary?: boolean;
}

export interface Person {
  data: {
    id: number;
    lastName: string;
    firstName: string;
    gender: string;
    genderIdentity: string;
    pronouns: string;
    preferredName: string;
    dateOfBirth: Date;
    userId: number;
    studentId: number;
    healthRecordId: number;
    image: string;
    healthRecord: HealthRecord;
    user: User;
    student: Student;
    phones: Phone[];
    emails: Email[];
    addresses: Address[];
    guardians: Guardian[];
    providers: Provider[];
    insuranceCoverages: InsuranceCoverage[];
  }
}

export type User = {
    id: number;
    personId: number;
    person: string;
    email: string;
    password: string;
    displayName: string;
    firstName: string;
    lastName: string;
    middleName: string;
    dateOfBirth: Date;
    role: string;
    disciplineId: number;
    isDisabled: boolean;
    mustChangePassword: boolean;
    failedAttempts: number;
    userSettings: UserSettings;
};

export type UserSettings = {
    id: number;
    userId: number;
    measurementSystem: string;
    user: string;
};

export type Student = {
    personId: number;
    // person: Person; TODO: circular reference
    school: string;
    grade: string;
} & BaseEntity;

export type BaseEntity = {
    id: number;
    createdAt: number;
};

export interface HealthRecord {
    id: number;
    personId: number;
    person: string;
    asthmas: Asthma[];
    vitalSigns: Vital[];
    diabeticReadings: DiabeticReading[];
    growths: Growth[];
    healthConditions: HealthCondition[];
    absences: Absence[];
    activities: Activity[];
}

export interface Address {
    id: number;
    personId: number;
    person?: string;
    placeId?: number;
    place?: Place;
    street1?: string;
    street2?: string;
    city?: string;
    stateProv?: string;
    postalCode?: string;
    country?: string;
    phone?: string;
    isPrimary?: boolean;
}

export interface Place {
    id: number;
    name: string;
    addresses: string[];
}
export interface Guardian {
    id: number;
    name?: string;
    guardianPersonId: number;
    relationship: string;
    isPrimary: boolean;
    isEmergency: boolean;
    comments: string;
}

export interface Provider {
    id: number;
    name?: string;
    providerPersonId: number;
    relationship: string;
    isPrimary: boolean;
    isEmergency: boolean;
    comments: string;
}

export interface InsuranceCoverage {
    id: number;
    person?: string;
    personId?: number;
    provider?: string;
    policy?: string;
    group?: string;
}

export interface Asthma {
    id: number;
    personId: number;
    healthRecordId?: number;
    healthRecord?: string;
    time?: Date;
    pefPre?: string;
    pefPost?: string;
    fevPre?: string;
    fevPost?: string;
    accessoryMuscles?: boolean;
    nasalFlaring?: boolean;
    shortnessOfBreath?: string;
    cough?: string;
    wheeze?: string;
    position?: string;
    alertness?: string;
    act1?: string;
    act2?: string;
    act3?: string;
    act4?: string;
    act5?: string;
    actScore?: string;
    comments?: string;
}

export interface Vital {
    id: number;
    healthRecordId: number;
    healthRecord: string;
    time?: Date;
    temperature?: Temperature;
    respiration?: string;
    bloodPressure?: BloodPressure;
    pulse?: Pulse;
    pulseOx?: string;
    painLevel?: string;
    comments?: string;
  }

  
export interface Email {
    id: number;
    personId: number;
    person: string;
    address?: string;
    type?: string;
    isPrimary?: boolean;
  }
  
  export interface Guardian {
    id: number;
    name?: string;
    guardianPersonId: number;
    relationship: string;
    isPrimary: boolean;
    isEmergency: boolean;
    comments: string;
  }
  
  export interface HealthRecord {
    id: number;
    personId: number;
    person: string;
    asthmas: Asthma[];
    vitalSigns: Vital[];
    diabeticReadings: DiabeticReading[];
    growths: Growth[];
    healthConditions: HealthCondition[];
    absences: Absence[];
    activities: Activity[];
  }
  
  export interface Absence {
    id: number;
    healthRecordId: number;
    // healthRecord: string;
    reason: string;
    date: Date;
    comments: string;
  }
  
  export interface Activity {
    id: number;
    healthRecordId: number;
    healthRecord: string;
    schoolActivity: string;
    startDate: Date;
    endDate: Date;
    comments: string;
  }
  
  export interface DiabeticReading {
    id: number;
    healthRecordId: number;
    healthRecord: string;
    date: Date;
    parameters: string;
    glucoseSource: string;
    glucose: string;
    carbohydrate: string;
    dose: string;
    basalRate: string;
    ketonesSource: string;
    ketones: string;
    comments: string;
  }
  
  export interface Growth {
    id: number;
    healthRecordId: number;
    healthRecord: string;
    time: Date;
    height: number;
    weight: number;
    bmi: string;
  }
  
  export interface HealthCondition {
    id: number;
    personId: number;
    startDate?: Date;
    endDate?: Date;
    condition?: string;
    bodySystem?: string;
    source?: string;
    icdCode?: string;
    confidential?: boolean;
    shared?: boolean;
    priority?: string;
    comments?: string;
  }
  
  export interface Vital {
    id: number;
    healthRecordId: number;
    healthRecord: string;
    time?: Date;
    temperature?: Temperature;
    respiration?: string;
    bloodPressure?: BloodPressure;
    pulse?: Pulse;
    pulseOx?: string;
    painLevel?: string;
    comments?: string;
  }
  
  export interface BloodPressure {
    systolic?: string;
    diastolic?: string;
    atRest?: boolean;
    arm?: string;
    position?: string;
  }
  
  export interface Pulse {
    reading?: string;
    atRest?: boolean;
    position?: string;
  }
  
  export interface Temperature {
    reading?: string;
    method?: string;
  }
  
  export interface InsuranceCoverage {
    id: number;
    person?: string;
    personId?: number;
    provider?: string;
    policy?: string;
    group?: string;
  }
  