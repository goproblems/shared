export type RectangleArea = {
    min: string;
    max: string;
};

export type ScenarioMetadata = {
    version: number;
    targetPositions: string[]; // A1 coordinates
    playerAllowedAreas: RectangleArea[];
    playerDisallowedAreas: RectangleArea[];
    computerAllowedAreas: RectangleArea[];
    computerDisallowedAreas: RectangleArea[];
    configOverrides: Record<string, unknown>;
    targetGoal?: 'live' | 'kill';
};

export const emptyScenarioMetadata = (): ScenarioMetadata => ({
    version: 1,
    targetPositions: [],
    playerAllowedAreas: [],
    playerDisallowedAreas: [],
    computerAllowedAreas: [],
    computerDisallowedAreas: [],
    configOverrides: {},
});

export type ScenarioMetadataAreaField =
    | 'playerAllowedAreas'
    | 'playerDisallowedAreas'
    | 'computerAllowedAreas'
    | 'computerDisallowedAreas';

export type ScenarioConfigOverrideDef = {
    key: string;
    label: string;
    type: 'number' | 'boolean';
    defaultValue: number | boolean;
    description?: string;
    step?: number;
};

export const SCENARIO_CONFIG_OVERRIDE_DEFS: ScenarioConfigOverrideDef[] = [
    {
        key: 'timeoutSeconds',
        label: 'Timeout (seconds)',
        type: 'number',
        defaultValue: 20,
        description:
            'If the request takes longer than this duration, a timeout error will be reported',
    },
    {
        key: 'scenario.analysis.visits',
        label: 'Analysis Visits',
        type: 'number',
        defaultValue: 1000,
        description: 'Max visits per analysis request',
    },
    {
        key: 'scenario.komi',
        label: 'Komi',
        type: 'number',
        defaultValue: 7.5,
        step: 0.5,
        description: 'Komi used for scenario analysis',
    },
    {
        key: 'scenario.min_response_policy',
        label: 'Min Response Policy',
        type: 'number',
        defaultValue: 0.05,
        step: 0.01,
        description: 'Minimum policy threshold for computer moves',
    },
    {
        key: 'scenario.allow_fallback_outside_area',
        label: 'Allow Outside-Area Fallback',
        type: 'boolean',
        defaultValue: false,
        description:
            'When true, if no valid computer response exists inside allowed area, fallback may choose one outside allowed area.',
    },
    // {
    //     key: 'scenario.include_optimal_moves',
    //     label: 'Include Optimal Moves',
    //     type: 'boolean',
    //     defaultValue: false,
    //     description: 'Include optimal moves in analysis results',
    // },
    {
        key: 'scenario.min_moves',
        label: 'Min Moves',
        type: 'number',
        defaultValue: 5,
        description:
            'A hard minimum path length threshold. If the current depth is below this value, the analysis cannot end under any condition.',
    },
    {
        key: 'scenario.min_depth_for_endness',
        label: 'Min Depth for Endness',
        type: 'number',
        defaultValue: 5,
        description:
            'A soft threshold for depth-based endness logic. It controls when some endness signals (such as tenuki/no-sente checks and depth acceleration) are allowed to trigger, but it does not block all other end conditions. Usually, set minDepthForEndness equal to minMoves.',
    },
    {
        key: 'scenario.score_drop_threshold',
        label: 'Score Drop Threshold',
        type: 'number',
        defaultValue: 15.0,
        step: 0.5,
        description: 'Score drop threshold for ending a path',
    },
    // {
    //     key: 'scenario.max_endness',
    //     label: 'Max Endness',
    //     type: 'number',
    //     defaultValue: 1.0,
    //     step: 0.1,
    //     description: 'Upper boundary for endness value',
    // },
    // {
    //     key: 'scenario.min_endness',
    //     label: 'Min Endness',
    //     type: 'number',
    //     defaultValue: -1.0,
    //     step: 0.1,
    //     description: 'Lower boundary for endness value',
    // },
    {
        key: 'scenario.depth_target_moves',
        label: 'Depth Target Moves',
        type: 'number',
        defaultValue: 30.0,
        step: 1,
        description: 'Target depth for endness calculation curve',
    },
    {
        key: 'scenario.depth_power',
        label: 'Depth Power',
        type: 'number',
        defaultValue: 1.1,
        step: 0.1,
        description:
            'Curve shape for depth factor: 1.0=linear, >1.0=slower early/faster late',
    },
    {
        key: 'scenario.tenuki_history_moves',
        label: 'Tenuki History Moves',
        type: 'number',
        defaultValue: 3,
        description: 'Number of recent moves to check for tenuki',
    },
    {
        key: 'scenario.tenuki_distance_threshold',
        label: 'Tenuki Distance',
        type: 'number',
        defaultValue: 6.0,
        step: 0.5,
        description: 'Distance threshold for considering a move as tenuki',
    },
    // {
    //     key: 'scenario.max_optimal_moves',
    //     label: 'Max Optimal Moves',
    //     type: 'number',
    //     defaultValue: 1,
    //     description:
    //         'Maximum number of optimal moves to add from parent position',
    // },
    {
        key: 'scenario.max_sente_candidates',
        label: 'Max Sente Candidates',
        type: 'number',
        defaultValue: 5,
        description: 'Maximum candidates to check for sente moves',
    },
    {
        key: 'scenario.min_sente_policy',
        label: 'Min Sente Policy',
        type: 'number',
        defaultValue: 0.05,
        step: 0.01,
        description: 'Minimum policy for a sente move to be considered',
    },
    {
        key: 'scenario.min_urgency_to_continue',
        label: 'Min Urgency to Continue',
        type: 'number',
        defaultValue: 12.0,
        step: 0.5,
        description:
            'Minimum urgency threshold to continue when no sente moves',
    },
    // {
    //     key: 'scenario.pass_move_visits',
    //     label: 'Pass Move Visits',
    //     type: 'number',
    //     defaultValue: 200,
    //     description:
    //         'Number of visits for analyzing pass move when calculating urgency',
    // },
    {
        key: 'scenario.ownership_threshold',
        label: 'Ownership Threshold',
        type: 'number',
        defaultValue: 0.7,
        step: 0.05,
        description:
            'Ownership threshold for determining if human moves belong to opponent',
    },
    {
        key: 'scenario.max_score_drop_max_mode',
        label: 'Max Score Drop (Max Mode)',
        type: 'number',
        defaultValue: 0.5,
        step: 0.1,
        description: 'Max score drop from best move for max rank responses',
    },
    {
        key: 'scenario.min_response_visits_max_mode',
        label: 'Min Response Visits (Max Mode)',
        type: 'number',
        defaultValue: 50,
        description: 'Minimum visits for a max rank response candidate',
    },
];
